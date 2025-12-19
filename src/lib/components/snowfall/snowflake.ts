import type { SnowflakeProps, SnowfallConfig } from './types';

/**
 * Linear interpolation between two values
 */
function lerp(start: number, end: number, t: number): number {
	return start + (end - start) * t;
}

/**
 * Generate a random number between min and max
 */
function randomBetween(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

/**
 * Snowflake class representing a single snowflake particle
 */
export class Snowflake {
	private props: SnowflakeProps;
	private config: Required<SnowfallConfig>;
	private framesSinceLastUpdate: number = 0;

	constructor(
		private canvas: HTMLCanvasElement,
		config: SnowfallConfig = {}
	) {
		this.config = this.getDefaultConfig(config);
		this.props = this.createInitialProps();
	}

	private getDefaultConfig(config: SnowfallConfig): Required<SnowfallConfig> {
		return {
			color: config.color ?? '#dee4fd',
			snowflakeCount: config.snowflakeCount ?? 150,
			radius: config.radius ?? [0.5, 3],
			speed: config.speed ?? [1, 3],
			wind: config.wind ?? [-0.5, 2],
			rotationSpeed: config.rotationSpeed ?? [-1, 1],
			changeFrequency: config.changeFrequency ?? 200
		};
	}

	private createInitialProps(): SnowflakeProps {
		const { radius, speed, wind } = this.config;
		return {
			x: randomBetween(0, this.canvas.width),
			y: randomBetween(-this.canvas.height, 0),
			radius: randomBetween(radius[0], radius[1]),
			speed: randomBetween(speed[0], speed[1]),
			wind: randomBetween(wind[0], wind[1]),
			opacity: randomBetween(0.3, 1),
			nextSpeed: randomBetween(speed[0], speed[1]),
			nextWind: randomBetween(wind[0], wind[1])
		};
	}

	/**
	 * Reset snowflake to top of canvas when it goes off screen
	 */
	private resetToTop(): void {
		const { speed, wind } = this.config;
		this.props.x = randomBetween(0, this.canvas.width);
		this.props.y = -this.props.radius * 2;
		this.props.speed = randomBetween(speed[0], speed[1]);
		this.props.wind = randomBetween(wind[0], wind[1]);
		this.props.nextSpeed = randomBetween(speed[0], speed[1]);
		this.props.nextWind = randomBetween(wind[0], wind[1]);
	}

	/**
	 * Update snowflake position and properties
	 */
	update(framesPassed: number = 1): void {
		const { changeFrequency, speed, wind } = this.config;

		// Gradually transition to next speed/wind values
		const t = 0.01 * framesPassed;
		this.props.speed = lerp(this.props.speed, this.props.nextSpeed, t);
		this.props.wind = lerp(this.props.wind, this.props.nextWind, t);

		// Update position
		this.props.y += this.props.speed * framesPassed;
		this.props.x += this.props.wind * framesPassed;

		// Periodically set new target values for smooth movement
		this.framesSinceLastUpdate += framesPassed;
		if (this.framesSinceLastUpdate >= changeFrequency) {
			this.framesSinceLastUpdate = 0;
			this.props.nextSpeed = randomBetween(speed[0], speed[1]);
			this.props.nextWind = randomBetween(wind[0], wind[1]);
		}

		// Reset if off screen
		if (this.props.y > this.canvas.height + this.props.radius * 2) {
			this.resetToTop();
		}

		// Wrap horizontally
		if (this.props.x > this.canvas.width + this.props.radius * 2) {
			this.props.x = -this.props.radius * 2;
		} else if (this.props.x < -this.props.radius * 2) {
			this.props.x = this.canvas.width + this.props.radius * 2;
		}
	}

	/**
	 * Draw the snowflake on the canvas
	 */
	draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this.props.x, this.props.y, this.props.radius, 0, Math.PI * 2);
		ctx.fillStyle = this.hexToRgba(this.config.color, this.props.opacity);
		ctx.fill();
		ctx.closePath();
	}

	/**
	 * Convert hex color to rgba with opacity
	 */
	private hexToRgba(hex: string, opacity: number): string {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			const r = parseInt(result[1], 16);
			const g = parseInt(result[2], 16);
			const b = parseInt(result[3], 16);
			return `rgba(${r}, ${g}, ${b}, ${opacity})`;
		}
		return `rgba(255, 255, 255, ${opacity})`;
	}

	/**
	 * Update config (for reactive props)
	 */
	updateConfig(config: SnowfallConfig): void {
		this.config = this.getDefaultConfig(config);
	}

	/**
	 * Resize handler - adjust position proportionally
	 */
	resizeHandler(prevWidth: number, prevHeight: number): void {
		this.props.x = (this.props.x / prevWidth) * this.canvas.width;
		this.props.y = (this.props.y / prevHeight) * this.canvas.height;
	}
}
