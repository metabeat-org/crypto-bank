import { atom } from "jotai";

interface Signer {
    name: string;
    address: string;
}

interface CreateForm {
    accountName: string;
    signers: Array<Signer>;
    threshold: number;
}
export const createStepAtom = atom<number>(0);

export const createFormAtom = atom<CreateForm>({
    accountName: "",
    signers: [
        {
            name: "",
            address: "",
        },
    ],
    threshold: 1,
});
