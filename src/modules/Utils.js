export default class Utils {
  static getTypeColor(type) {
    switch (type) {
    case 'fire':
      return '#FD7D24';
    case 'water':
      return '#4A90DA';
    case 'eletric':
      return '#EED535';
    case 'grass':
      return '#62B957';
    case 'ice':
      return '#61CEC0';
    case 'fighting':
      return '#D04164';
    case 'poison':
      return '#A552CC';
    case 'ground':
      return '#DD7748';
    case 'flying':
      return '#748FC9';
    case 'psychic':
      return '#EA5D60';
    case 'bug':
      return '#8CB230';
    case 'rock':
      return '#BAAB82';
    case 'ghost':
      return '#556AAE';
    case 'dragon':
      return '#0F6AC0';
    case 'dark':
      return '#776055';
    case 'steel':
      return '#417D9A';
    case 'fairy':
      return '#ED6EC7';
    default:
      return '#9DA0AA';
    }
  }
}
