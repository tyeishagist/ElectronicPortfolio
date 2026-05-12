document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });

    const heroWords = ['Tyeisha Gist', 'an IT Scholar', 'a Project Builder', 'a Blog Creator', 'a Justice Minded Professional', 'a Graduating Senior'];
    const typedElement = document.querySelector('.hero-typing');
    if (typedElement) {
        let wordIndex = 0;
        let letterIndex = 0;
        function typeNext() {
            const word = heroWords[wordIndex];
            typedElement.textContent = word.slice(0, letterIndex);
            if (letterIndex < word.length) {
                letterIndex += 1;
                setTimeout(typeNext, 120);
            } else {
                setTimeout(() => {
                    letterIndex = 0;
                    wordIndex = (wordIndex + 1) % heroWords.length;
                    typeNext();
                }, 1800);
            }
        }
        typeNext();
    }
});
