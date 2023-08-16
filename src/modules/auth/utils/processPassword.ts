import * as bcrypt from 'bcrypt';

async function hashPassword(password: string, salt: number): Promise<string>{
    return await bcrypt.hash(password, salt);
}

async function compare(providePass: string, storedPass: string): Promise<Boolean>{
    return await bcrypt.compare(providePass, storedPass);
}

export default {hashPassword, compare}