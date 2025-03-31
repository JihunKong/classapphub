// 로딩 스피너
window.addEventListener('load', function() {
    const spinner = document.querySelector('.loading-spinner');
    spinner.style.opacity = '0';
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);
});

// 다크 모드 토글
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 저장된 테마 설정 불러오기
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateDarkModeIcon(savedTheme === 'dark');
}

// 시스템 테마 변경 감지
prefersDarkScheme.addListener((e) => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateDarkModeIcon(e.matches);
    }
});

// 다크 모드 토글 이벤트
darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme === 'dark');
});

// 다크 모드 아이콘 업데이트
function updateDarkModeIcon(isDark) {
    const icon = darkModeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 블로그 카드 애니메이션
const blogCards = document.querySelectorAll('.blog-card');
const appCards = document.querySelectorAll('.app-card');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 블로그 카드 애니메이션 적용
blogCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// 앱 카드 애니메이션 적용
appCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// 모바일 메뉴 토글
const createMobileMenu = () => {
    const header = document.querySelector('.header-container');
    const nav = document.querySelector('nav');
    
    // 모바일 메뉴 버튼 생성
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    // 모바일 메뉴 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--text-color);
            cursor: pointer;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block;
            }
            
            nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--bg-color);
                padding: 20px;
                box-shadow: var(--shadow);
            }
            
            nav.active {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            nav a {
                text-align: center;
                padding: 10px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 헤더에 버튼 추가
    header.appendChild(menuButton);
    
    // 메뉴 토글 이벤트
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

// 페이지 로드 시 모바일 메뉴 초기화
document.addEventListener('DOMContentLoaded', createMobileMenu);

// 문의하기 폼 제출
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 폼 데이터 수집
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // 여기에 폼 제출 로직 추가
        console.log('폼 제출:', data);
        
        // 성공 메시지 표시
        alert('문의가 성공적으로 전송되었습니다. 감사합니다!');
        this.reset();
    });
} 