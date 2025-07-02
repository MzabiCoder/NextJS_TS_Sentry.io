export interface Ticket {
    id: string
    subject: string
    description: string
    priority: string
    status: string
    createdAt: string
    updatedAt: string
}

export interface Responseresult {
    success: boolean
    message: string
}