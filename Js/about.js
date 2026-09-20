document.addEventListener('DOMContentLoaded', () => {
    const terminalText = document.getElementById('terminal-text');
    if(terminalText) {
        const originalText = terminalText.textContent.trim();
        terminalText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                terminalText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                setInterval(() => {
                    if(terminalText.textContent.endsWith('█')) {
                        terminalText.textContent = terminalText.textContent.slice(0, -1);
                    } else {
                        terminalText.textContent += '█';
                    }
                }, 500);
            }
        }
        setTimeout(typeWriter, 500);
    }
});