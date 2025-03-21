import { PropsWithChildren } from "react"
import CardContainer from "./CardContainer"
import { Switch } from "../common/Switch"
import { Skeleton } from "../common/Skeleton"
import CardContainerHeader from "./CardContainerHeader"

interface ToggleCardHeaderProps {
    isDisabled?: boolean
    value: boolean
    onChange: (value: boolean) => void
}

export default function ToggleCardHeader({ children, isDisabled, value, onChange }: PropsWithChildren<ToggleCardHeaderProps>) {
    return <CardContainerHeader
        rightContent={<Switch
            checked={value}
            onCheckedChange={onChange}
            disabled={isDisabled}
        />}
    />
}

export function ToggleCardHeaderSkeleton() {
    return (
        <Skeleton className="mt-6 w-full h-20" />
    )
}