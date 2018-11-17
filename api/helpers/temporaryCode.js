// @flow
// prettier-ignore
const wordsList = [
  // Borrowed from random-words which borrowed it from xkcd password generator which borrowed it from wherever
  'ability', 'able', 'account', 'accurate', 'actual', 'actually', 'advice', 'affect', 'ago', 'agree', 'all', 'allow', 'attention', 'audience', 'away', 'baby', 'balloon', 'band', 'baseball', 'basic', 'bent', 'beside', 'bigger', 'biggest', 'black', 'blank', 'build', 'building', 'business', 'busy', 'cake', 'call', 'cannot', 'cap', 'care', 'careful', 'cat', 'catch', 'center', 'central', 'chance', 'change', 'check', 'cheese', 'choice', 'choose', 'city', 'class', 'climate', 'climb', 'clothing', 'cloud', 'cold', 'collect', 'come', 'comfortable', 'compass', 'complete', 'condition', 'congress', 'contain', 'continent', 'cool', 'copper', 'cotton', 'could', 'cover', 'cow', 'crop', 'cross', 'customs', 'cut', 'dark', 'darkness', 'dear', 'death', 'degree', 'depend', 'determine', 'develop', 'difference', 'different', 'directly', 'dirt', 'disease', 'dish', 'does', 'dog', 'dot', 'double', 'dress', 'drew', 'drop', 'dropped', 'during', 'dust', 'earn', 'earth', 'edge', 'education', 'electricity', 'element', 'energy', 'engine', 'environment', 'equal', 'establish', 'even', 'everyone', 'everything', 'excellent', 'except', 'exist', 'expect', 'expression', 'extra', 'failed', 'fair', 'far', 'farm', 'father', 'favorite', 'feet', 'fell', 'fierce', 'fifteen', 'film', 'final', 'fire', 'fireplace', 'flame', 'flat', 'flower', 'fly', 'for', 'force', 'former', 'fort', 'fourth', 'fox', 'friendly', 'frighten', 'full', 'fully', 'future', 'gain', 'gather', 'gave', 'giant', 'gift', 'globe', 'go', 'got', 'government', 'graph', 'grass', 'green', 'grew', 'guess', 'guide', 'halfway', 'hall', 'happily', 'happy', 'have', 'having', 'hearing', 'heart', 'helpful', 'her', 'higher', 'highest', 'hit', 'hold', 'horse', 'hospital', 'human', 'hundred', 'hurt', 'husband', 'imagine', 'immediately', 'include', 'including', 'industrial', 'industry', 'instrument', 'interest', 'is', 'island', 'job', 'join', 'just', 'keep', 'knew', 'knife', 'lady', 'laid', 'largest', 'last', 'lead', 'leader', 'led', 'left', 'library', 'lie', 'line', 'lion', 'living', 'load', 'longer', 'look', 'love', 'lovely', 'lying', 'machine', 'main', 'mainly', 'manufacturing', 'many', 'master', 'material', 'mean', 'means', 'member', 'memory', 'mice', 'middle', 'mind', 'mine', 'mix', 'mixture', 'month', 'mood', 'motion', 'motor', 'moving', 'mud', 'mysterious', 'nails', 'nature', 'near', 'needed', 'needle', 'never', 'new', 'no', 'nobody', 'nose', 'not', 'number', 'numeral', 'ocean', 'of', 'old', 'older', 'open', 'operation', 'order', 'ordinary', 'our', 'ourselves', 'owner', 'oxygen', 'pair', 'palace', 'park', 'part', 'pass', 'passage', 'pencil', 'people', 'person', 'personal', 'pictured', 'pie', 'pipe', 'pitch', 'planning', 'plant', 'pleasure', 'plenty', 'point', 'pole', 'poor', 'popular', 'possibly', 'post', 'powerful', 'practical', 'pretty', 'prevent', 'printed', 'private', 'production', 'program', 'proud', 'prove', 'purpose', 'push', 'quickly', 'quiet', 'rain', 'raise', 'raw', 'rays', 'rear', 'reason', 'red', 'refer', 'remain', 'remarkable', 'represent', 'require', 'rhyme', 'rhythm', 'rise', 'rising', 'rod', 'roll', 'round', 'route', 'running', 'rush', 'sale', 'salmon', 'satisfied', 'save', 'school', 'science', 'season', 'seat', 'seems', 'seen', 'sent', 'sentence', 'setting', 'settle', 'shaking', 'shall', 'sheet', 'shelf', 'society', 'soft', 'solution', 'solve', 'somewhere', 'son', 'southern', 'space', 'spell', 'spend', 'spoken', 'sport', 'standard', 'star', 'steady', 'steam', 'stiff', 'still', 'store', 'storm', 'stream', 'street', 'stronger', 'struck', 'subject', 'substance', 'suggest', 'suit', 'support', 'suppose', 'swept', 'swim', 'table', 'tail', 'tape', 'task', 'team', 'tears', 'tent', 'term', 'them', 'themselves', 'thick', 'thin', 'thou', 'though', 'through', 'throughout', 'tie', 'tight', 'tired', 'title', 'tone', 'tongue', 'torn', 'total', 'track', 'trade', 'treated', 'tree', 'tropical', 'trouble', 'turn', 'twelve', 'under', 'underline', 'unless', 'until', 'use', 'useful', 'vapor', 'variety', 'vessels', 'victory', 'vote', 'vowel', 'war', 'warm', 'wave', 'way', 'weigh', 'weight', 'wet', 'whale', 'where', 'wherever', 'who', 'whole', 'wild', 'will', 'wire', 'wise', 'won', 'wonder', 'work', 'worker', 'wrapped', 'write', 'year', 'yellow', 'your', 'yourself',
]

const getFourRandomWords = () => {
  const length = Math.floor(wordsList.length / 4)
  const randomIndex1 = Math.floor(Math.random() * length * 1)
  const randomIndex2 = Math.floor(Math.random() * length * 2)
  const randomIndex3 = Math.floor(Math.random() * length * 3)
  const randomIndex4 = Math.floor(Math.random() * length * 4)

  return [
    wordsList[randomIndex1],
    wordsList[randomIndex2],
    wordsList[randomIndex3],
    wordsList[randomIndex4],
  ]
}

const MAX_WORD_LENGTH = 4
const PREFERRED_MIN_WORD_LENGTH = 3

/**
 * Generate a code like 'beau-dead-reful-mind'
 */
const generateTemperaryCode = () => {
  const randomWords = getFourRandomWords()
  const code = randomWords.reduce((wipCode, currentWord, index) => {
    // If we're not adding first word, add a dash
    if (index !== 0) {
      wipCode += '-'
    }

    // When word is larger than say 3 characters, we randomly choose
    // the 4 character from anywhere, not just the start.
    // This maximizes the randomness furthur.
    let from = 0
    const lengthDiff = currentWord.length - PREFERRED_MIN_WORD_LENGTH
    if (Math.sign(lengthDiff) === 1) {
      from = Math.random() * lengthDiff
    }

    // Add top 4 character of the random word
    wipCode += currentWord.substr(from, MAX_WORD_LENGTH)
    return wipCode
  }, '')

  return code
}

export default generateTemperaryCode
