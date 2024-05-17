export type TUser = {
  storageAddress?: string | null
  totalCollected?: number | null
  trainer?: string | null
}

export type TUserStore = {
  clearUser: () => void
  setUser: (data: TUser) => void
  user: TUser
}
