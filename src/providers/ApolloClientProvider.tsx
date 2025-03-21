'use client'

import { client } from "@/libs/apollo-client"
import { ApolloProvider } from "@apollo/client"
import React, { type PropsWithChildren } from "react"

export function ApolloClientProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
