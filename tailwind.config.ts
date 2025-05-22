
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					50: '#FFF9E5',
					100: '#FFF0C2',
					200: '#FFE499',
					300: '#FFD870',
					400: '#F5D77B',
					500: '#E6A419',
					600: '#CB8A00',
					700: '#B07300',
					800: '#8A5C00',
					900: '#644200',
					950: '#3D2700',
				},
				aesthetic: {
					50: '#f5f7fa',
					100: '#e9eef5',
					200: '#d6e0ed',
					300: '#b4c9de',
					400: '#8ba9ca',
					500: '#6c8db7',
					600: '#5374a4',
					700: '#455e86',
					800: '#3c506f',
					900: '#34435d',
					950: '#222c3d',
				},
				neon: {
					gold: '#F5D77B',
					amber: '#E6A419',
					orange: '#CB8A00',
					black: '#1A1F2C',
					gray: '#8E9196',
					light: '#FFF9E5',
					softGold: '#FFE499'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-neon': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite'
			},
			boxShadow: {
				'neon': '0 0 5px rgba(245, 215, 123, 0.7), 0 0 10px rgba(245, 215, 123, 0.5), 0 0 15px rgba(245, 215, 123, 0.3)',
				'neon-hover': '0 0 8px rgba(245, 215, 123, 0.8), 0 0 15px rgba(245, 215, 123, 0.6), 0 0 20px rgba(245, 215, 123, 0.4)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-neon': 'linear-gradient(135deg, #F5D77B 0%, #E6A419 100%)',
				'gradient-dark': 'linear-gradient(135deg, #1A1F2C 0%, #2A2F3C 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
