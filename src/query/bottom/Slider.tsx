import React, { memo, useState, useMemo, useRef, useEffect } from 'react';
import { ISliderProp } from '../../interfaces/slider-props.interface';
import './Slider.css';
import leftPad from 'left-pad';
import useWinSize from '../../custom-hooks/useWinSize';

const Slider: React.FC<ISliderProp> = (props: ISliderProp) => {
    const {
        title,
        currentStartHours,
        currentEndHours,
        onStartChanged,
        onEndChanged,
    } = props;

    const [start, setStart] = useState(() => currentStartHours / 24 * 100);
    const [end, setEnd] = useState(() => currentEndHours / 24 * 100);

    const prevStartHours = useRef<number>(currentStartHours);
    const prevEndHours = useRef<number>(currentEndHours);
    if (prevStartHours.current !== currentStartHours) {
        setStart(currentStartHours / 24 * 100);
        prevStartHours.current = currentStartHours;
    }
    if (prevEndHours.current !== currentEndHours) {
        setEnd(currentEndHours / 24 * 100);
        prevEndHours.current = currentEndHours;
    }

    const startHandle = useRef<HTMLElement>(null);
    const endHandle = useRef<HTMLElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const rangeWidth = useRef<number>(0);
    const lastStartX = useRef<number>(0);
    const lastEndX = useRef<number>(0);
    const winSize = useWinSize();

    const startPercent = useMemo(() => {
        if (start > 100) {
            return 100;
        } else if (start < 0) {
            return 0;
        } else {
            return start;
        }
    }, [start]);

    const endPercent = useMemo(() => {
        if (end > 100) {
            return 100;
        } else if (end < 0) {
            return 0;
        } else {
            return end;
        }
    }, [end]);

    const startHours = useMemo(() => {
        return Math.round(startPercent * 24 / 100);
    }, [startPercent]);

    const endHours = useMemo(() => {
        return Math.round(endPercent * 24 / 100);
    }, [endPercent]);

    const startText = useMemo(() => {
        return leftPad(startHours, 2, '0') + ':00';
    }, [startHours]);

    const endText = useMemo(() => {
        return leftPad(endHours, 2, '0') + ':00';
    }, [endHours]);

    const onStartTouchBegin = (e: TouchEvent) => {
        const touch = e.targetTouches[0];
        lastStartX.current = touch.pageX;
    }

    const onEndTouchBegin = (e: TouchEvent) => {
        const touch = e.targetTouches[0];
        lastEndX.current = touch.pageX;
    }

    const onStartTouchMove = (e: TouchEvent) => {
        const touch = e.targetTouches[0];
        const distance = touch.pageX - lastStartX.current;
        lastStartX.current = touch.pageX;
        setStart((start: number) => start + (distance / rangeWidth.current) * 100)
    }

    const onEndTouchMove = (e: TouchEvent) => {
        const touch = e.targetTouches[0];
        const distance = touch.pageX - lastEndX.current;
        lastEndX.current = touch.pageX;
        setEnd((end: number) => end + (distance / rangeWidth.current) * 100)
    }

    useEffect(() => {
        if (range.current) {
            const width = window.getComputedStyle(range.current).width;
            if (width) {
                rangeWidth.current = Number.parseFloat(width);
            }
        }
    }, [winSize.width]);

    useEffect(() => {
        if (startHandle.current) {
            startHandle.current.addEventListener('touchstart', onStartTouchBegin, false);
            startHandle.current.addEventListener('touchmove', onStartTouchMove, false);
        }
        if (endHandle.current) {
            endHandle.current.addEventListener('touchstart', onEndTouchBegin, false);
            endHandle.current.addEventListener('touchmove', onEndTouchMove, false);
        }
        return () => {
            if (startHandle.current) {
                startHandle.current.removeEventListener('touchstart', onStartTouchBegin, false);
                startHandle.current.removeEventListener('touchmove', onStartTouchMove, false);
            }
            if (endHandle.current) {
                endHandle.current.removeEventListener('touchstart', onEndTouchBegin, false);
                endHandle.current.removeEventListener('touchmove', onEndTouchMove, false);
            }
        }
    });

    useEffect(() => {
        onStartChanged(startHours);
    }, [startHours]);

    useEffect(() => {
        onEndChanged(endHours);
    }, [endHours]);

    return (
        <div className="option">
            <h3>{title}</h3>
            <div className="range-slider">
                <div className="slider" ref={range}>
                    <div className="slider-range" style={{
                        left: startPercent + '%',
                        width: endPercent - startPercent + '%',
                    }}></div>
                    <i ref={startHandle} className="slider-handle" style={{
                        left: startPercent + '%',
                    }}>
                        <span>{startText}</span>
                    </i>
                    <i ref={endHandle} className="slider-handle" style={{
                        left: endPercent + '%',
                    }}>
                        <span>{endText}</span>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default memo(Slider);
