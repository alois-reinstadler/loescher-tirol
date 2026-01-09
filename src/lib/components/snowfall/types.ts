export interface SnowfallConfig {
	/** Color of the snowflakes (default: #dee4fd) */
	color?: string;
	/** Number of snowflakes to render (default: 150) */
	snowflakeCount?: number;
	/** Minimum and maximum radius of snowflakes in pixels (default: [0.5, 3]) */
	radius?: [number, number];
	/** Minimum and maximum speed of snowflakes (default: [1, 3]) */
	speed?: [number, number];
	/** Minimum and maximum wind speed (horizontal movement) (default: [-0.5, 2]) */
	wind?: [number, number];
	/** Minimum and maximum rotation speed (default: [-1, 1]) */
	rotationSpeed?: [number, number];
	/** Change frequency - how often snowflake properties change (default: 200) */
	changeFrequency?: number;
}

export interface SnowflakeProps {
	x: number;
	y: number;
	radius: number;
	speed: number;
	wind: number;
	opacity: number;
	nextSpeed: number;
	nextWind: number;
}




