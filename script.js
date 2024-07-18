function openGame(game) {
    window.location.href = `${game.toLowerCase().replace(' ', '-')}.html`;
}
