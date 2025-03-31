document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 기본 관리자 계정 (실제로는 서버에서 검증해야 함)
    if (username === 'admin' && password === 'admin123') {
        // 로그인 성공 시 대시보드로 이동
        window.location.href = 'dashboard.html';
    } else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
});
