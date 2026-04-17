declare module 'astro:content' {
	/**
	 * Manual fix for Astro 6.1.7 generator bug where ExtractDataType is missing.
	 * This satisfies the Record<string, any> constraint used in LiveLoader types.
	 */
	type ExtractDataType<T> = any;
}
