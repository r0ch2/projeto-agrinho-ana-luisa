document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de causas do desmatamento
    const ctx = document.getElementById('graficoCausas').getContext('2d');
    const graficoCausas = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Agricultura', 'Pecuária', 'Exploração Madeireira', 'Urbanização', 'Outros'],
            datasets: [{
                data: [41, 38, 10, 7, 4],
                backgroundColor: [
                    '#2e7d32',
                    '#81c784',
                    '#c8e6c9',
                    '#a5d6a7',
                    '#43a047'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Principais Causas do Desmatamento no Brasil (%)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Efeito de rolagem suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});