import React, { useEffect } from 'react';

function Timer(params) {

    useEffect(() => {
        let timerInterval = setInterval(() => {
            console.log('타이머가 실행 중 입니다.');
        }, 1000);

        // clean up
        // 해당 컴포넌트가 unMount 되었을 때 && useEffect가 다시 실행되었을 때 수행함
        return () => {
            clearInterval(timerInterval);
            console.log('타이머가 종료되었습니다.');

        }

    }, []);




    return (
        <div> 타이머가 실행중입니다. </div>
    )
}

export default Timer;