export interface FormField {
    name: string,
    type: 'text' | 'number' | 'select',
    options?: string[]
}