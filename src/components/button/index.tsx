type props = {
 type?: string,
 size?: string,
 icon?: any,
 children: any;
}

export const button = (props: props) => {
    return(
        <button className={`text-${props.type}`}>
            {props.children}
        </button>
    );
}
