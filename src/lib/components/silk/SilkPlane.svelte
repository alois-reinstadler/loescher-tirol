<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';
	import { ShaderMaterial, Color, type IUniform } from 'three';

	interface Props {
		speed?: number;
		scale?: number;
		color?: string;
		noiseIntensity?: number;
		rotation?: number;
	}

	let {
		speed = 5,
		scale = 1,
		color = '#7B7481',
		noiseIntensity = 1.5,
		rotation = 0
	}: Props = $props();

	type NormalizedRGB = [number, number, number];

	const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
		const clean = hex.replace('#', '');
		const r = parseInt(clean.slice(0, 2), 16) / 255;
		const g = parseInt(clean.slice(2, 4), 16) / 255;
		const b = parseInt(clean.slice(4, 6), 16) / 255;
		return [r, g, b];
	};

	const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

	const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

	interface SilkUniforms {
		uSpeed: IUniform<number>;
		uScale: IUniform<number>;
		uNoiseIntensity: IUniform<number>;
		uColor: IUniform<Color>;
		uRotation: IUniform<number>;
		uTime: IUniform<number>;
		[uniform: string]: IUniform;
	}

	// Create uniforms object once (not reactive - we update values directly)
	const uniforms: SilkUniforms = {
		uSpeed: { value: speed },
		uScale: { value: scale },
		uNoiseIntensity: { value: noiseIntensity },
		uColor: { value: new Color(...hexToNormalizedRGB(color)) },
		uRotation: { value: rotation },
		uTime: { value: 0 }
	};

	// Get viewport from Threlte context
	const { size } = useThrelte();

	// Calculate scale based on viewport
	const meshScale = $derived.by(() => {
		// Convert pixel size to world units (assuming orthographic-like behavior)
		// For a plane that fills the viewport, we need to match the camera frustum
		const aspect = $size.width / $size.height;
		// These values work well for a default perspective camera at z=5
		const height = 12;
		const width = height * aspect;
		return [width, height, 1] as [number, number, number];
	});

	// Reference to the material for animation
	let material: ShaderMaterial | undefined = $state();

	// Update uniforms when props change (update values directly, don't replace the object)
	$effect(() => {
		if (material) {
			material.uniforms.uSpeed.value = speed;
			material.uniforms.uScale.value = scale;
			material.uniforms.uNoiseIntensity.value = noiseIntensity;
			material.uniforms.uColor.value.set(...hexToNormalizedRGB(color));
			material.uniforms.uRotation.value = rotation;
		}
	});

	// Animation loop using Threlte's useTask
	useTask((delta) => {
		if (material) {
			material.uniforms.uTime.value += 0.1 * delta;
		}
	});
</script>

<T.Mesh scale={meshScale}>
	<T.PlaneGeometry args={[1, 1, 1, 1]} />
	<T.ShaderMaterial bind:ref={material} {uniforms} {vertexShader} {fragmentShader} />
</T.Mesh>
