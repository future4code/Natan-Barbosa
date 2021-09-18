import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from './styled'

export const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    )
}