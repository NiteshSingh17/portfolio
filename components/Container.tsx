import React  from 'react';

type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
}

export default function Container({ className  , children } : ContainerProps) {
    return (
        <div className={ 'px-10 lg:px-40 ' + ( className ? className : '' ) }>
            { children }
        </div>
    )
}
