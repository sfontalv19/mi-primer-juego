let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'TELEVISOR',
    'CAMA',
    'CELULAR',
    'PROGRAMACION',
    'RICARDO',
    'PORTATIL',
    'JULIAN',
    'MARIA',
    'CARGADOR',
    'MANO',
    'GENERATION',
    'GITHUB',
    
    
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
    
}