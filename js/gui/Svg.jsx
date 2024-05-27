export function Svg({ children, viewBox, ...props }) {
    return <svg {...props} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>;
}
