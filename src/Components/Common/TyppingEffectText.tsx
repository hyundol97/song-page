/**
 * @file 타이핑 효과를 주는 p태그 출력 컴포넌트
 * @author h.s.Song
 */

import { useState, useEffect } from 'react';

interface TyppingEffectTextType {
  text: string;
}

const TyppingEffectText = (props: TyppingEffectTextType) => {
  const { text } = props;

  const [typpingText, setTyppingText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const typingIntervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setTyppingText(text.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(typingIntervalId);
      }
    }, 200);

    // 10초마다 초기화 및 타이핑 효과 재시작
    const resetIntervalId = setInterval(() => {
      setTyppingText('');
      currentIndex = 0;
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
        // 타이핑 효과 재시작
        const newTypingIntervalId = setInterval(() => {
          if (currentIndex <= text.length) {
            setTyppingText(text.slice(0, currentIndex));
            currentIndex += 1;
          } else {
            clearInterval(newTypingIntervalId);
          }
        }, 200);
      }, 0);
    }, 10000);

    return () => {
      clearInterval(typingIntervalId);
      clearInterval(resetIntervalId);
    };
  }, [text]);

  return (
    <p className="intro-blue" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {typpingText.length > 0 ? typpingText : '\u00A0'}
    </p>
  );
};

export default TyppingEffectText;
