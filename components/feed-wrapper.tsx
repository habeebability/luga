type Props = {
    children: React.ReactNode;
}

export const FeedWrapper = ({children}: Props)=> {
    return (
        <div className="flex-1 top-0 relative pb-10">
            {children}
        </div>
    )
}