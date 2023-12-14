import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

const login = async () => {
    return await signInWithEmailAndPassword(auth, email);
}

const logout = async () => {
    await signOut();
}

const recoverPassword = async (email) => {
    await sendPasswordResetEmail(email);
}

const createStudent = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        console.error(JSON.stringify(e));
    }
}

export default { login, logout, recoverPassword, createStudent }