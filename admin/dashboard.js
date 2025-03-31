// 로그아웃 기능
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('로그아웃 하시겠습니까?')) {
        window.location.href = 'index.html';
    }
});

// 네비게이션 링크 활성화
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// 대시보드 통계 업데이트 (실제로는 서버에서 데이터를 가져와야 함)
function updateDashboardStats() {
    // 여기에 서버에서 통계 데이터를 가져오는 코드 추가
}

// 최근 게시글 목록 업데이트 (실제로는 서버에서 데이터를 가져와야 함)
function updateRecentPosts() {
    // 여기에 서버에서 게시글 데이터를 가져오는 코드 추가
}

// 페이지 로드 시 데이터 업데이트
document.addEventListener('DOMContentLoaded', function() {
    updateDashboardStats();
    updateRecentPosts();
});
