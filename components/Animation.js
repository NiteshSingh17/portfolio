import React, { useCallback, useEffect, useMemo, useState } from 'react';

export const FromLeftAnimation = (props) => {
    const [ show, setShow ] = useState(false);
    const divRef = React.createRef();

    const options = useMemo(() => ({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }),[])
    const callback = useCallback((entries) => {
        const [entry] = entries;
        if(entry.isIntersecting){
            setShow(true);
        }
    },[setShow])
    useEffect(() => {
            const divCurrent = divRef.current;
            const observer = new IntersectionObserver(callback, options);
            if(divCurrent){
                observer.observe(divRef.current)
            }
            return () => {
                if(divCurrent)
                observer.unobserve(divCurrent)
            }
    }, [divRef, options, callback])
    
    return (
        <div ref={divRef} className={ 'w-full relative transition-all duration-2000 ' + ( show ? 'left-0 opacity-100' : '-left-10 opacity-0' ) } { ...props}>
            {props.children}
        </div>
    )
}

export const FromRightAnimation = (props) => {
    const [ show, setShow ] = useState(false);
    const divRef = React.createRef();

    const options = useMemo(() => ({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }),[])
    const callback = useCallback((entries) => {
        const [entry] = entries;
        if(entry.isIntersecting){
            setShow(true);
        }
    },[setShow])
    useEffect(() => {
            const divCurrent = divRef.current;
            const observer = new IntersectionObserver(callback, options);
            if(divCurrent){
                observer.observe(divRef.current)
            }
            return () => {
                if(divCurrent)
                observer.unobserve(divCurrent)
            }
    }, [divRef, options, callback])
    
    return (
        <div ref={divRef}  className={ 'w-full relative transition-all duration-2000 ' + ( show ? 'right-0 opacity-100' : '-right-10 opacity-0' ) } { ...props}>
            {props.children}
        </div>
    )
}

export const FromBottomAnimation = (props) => {
    const [ show, setShow ] = useState(false);
    const divRef = React.createRef();

    const options = useMemo(() => ({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }),[])
    const callback = useCallback((entries) => {
        const [entry] = entries;
        if(entry.isIntersecting){
            setShow(true);
        }
    },[setShow])
    useEffect(() => {
            const divCurrent = divRef.current;
            const observer = new IntersectionObserver(callback, options);
            if(divCurrent){
                observer.observe(divRef.current)
            }
            return () => {
                if(divCurrent)
                observer.unobserve(divCurrent)
            }
    }, [divRef, options, callback])
    
    return (
        <div ref={divRef}  className={ 'h-full w-full relative transition-all duration-2000 ' + ( show ? 'bottom-0 opacity-100' : '-bottom-10 opacity-0' ) + ( props.delay ? ' delay-' + (props.delay * 1000) : ' delay-0' ) } { ...props}>
            {props.children}
        </div>
    )
}