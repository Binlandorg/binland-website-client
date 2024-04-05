import { PropsWithChildren } from "react"

export interface IH3Props extends PropsWithChildren {
  weight: "medium" | "semibold"
}

export interface IH4Props extends PropsWithChildren {
  weight: "regular" | "medium" | "bold"
}

export interface IH5Props extends IH4Props {}
