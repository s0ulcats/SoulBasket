import { PropsWithChildren } from "react"
import CardContainer from "./CardContainer"
import { Switch } from "../common/Switch"
import { Skeleton } from "../common/Skeleton"

interface ToggleCardProps {
    heading: string
    description: string
    isDisabled?: boolean
    value: boolean
    onChange: (value: boolean) => void
}

export default function ToggleCard({ children, heading, description, isDisabled, value, onChange }: PropsWithChildren<ToggleCardProps>) {
    return <CardContainer
        heading={heading}
        description={description}
        rightContent={<Switch
            checked={value}
            onCheckedChange={onChange}
            disabled={isDisabled}
        />}
    />
}

export function ToggleCardSkeleton() {
    return (
        <Skeleton className="mt-6 w-full h-20" />
    )
}