// Import!
import TinyCrypto from 'tiny-crypto'

const { ENCRYPT_KEY } = process.env

// Init!
const tinyCrypto = new TinyCrypto(ENCRYPT_KEY) // Ideally from an environment variable

// Use!
export const encryptString = str => tinyCrypto.encrypt(str)
export const decryptString = encrptedText => tinyCrypto.decrypt(encrptedText)
