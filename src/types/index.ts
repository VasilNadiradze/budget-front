export interface IUserData {
    email: string,
    passord: string
}

export interface IUserDataResponse {
    email: string | undefined,
    passord: string | undefined,
    createdAt: string | undefined,
    updatedAt: string | undefined,
    __v?: number | undefined,
    _id: string | undefined,
    message: string | undefined
}