const buscarReceitas = async () => {
    const ingredientes = document.getElementById('ingredientes').value.trim();
    const erroElem = document.getElementById('erro');
    const receitasContainer = document.getElementById('receitas-container');

    erroElem.textContent = '';
    receitasContainer.innerHTML = '';

    if (ingredientes === '') {
        erroElem.textContent = 'Por favor, insira pelo menos um ingrediente.';
        return;
    }

    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientes}&number=10&apiKey=82357c68c46c4d64b0c9972b14f42f28`);
        const data = await response.json();

        if (data.length > 0) {
            data.forEach(recipe => {
                const receitaHTML = `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                            <div class="card-body">
                                <h5 class="card-title">${recipe.title}</h5>
                                <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" class="btn btn-warning" target="_blank" style="background-color: #D96B0B; border-color: #D96B0B;">Ver Receita</a>
                            </div>
                        </div>
                    </div>
                `;
                receitasContainer.insertAdjacentHTML('beforeend', receitaHTML);
            });
        } else {
            erroElem.textContent = 'Nenhuma receita encontrada para os ingredientes informados.';
        }
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        erroElem.textContent = 'Erro ao buscar receitas. Por favor, tente novamente mais tarde.';
    }
};
