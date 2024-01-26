import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {

    constructor() { };

    async setItem(key: string, item: string): Promise<boolean> {
        let done: boolean = true;
        try {
            await AsyncStorage.setItem(key, item);
        } catch (ex) {
            done = false;
        }
        return done;
    }

    async getItem(key: string): Promise<string> {
        let result: string | null = "";
        try {
            await AsyncStorage.getItem(key, (err, res) => {
                if (err) result = "";
                else result = res ?? "";
            });
        } catch (ex) {
            result = "";
        }
        return result ?? "";
    }

    async deleteItem(key: string): Promise<boolean> {
        let done: boolean = true;
        try {
            await AsyncStorage.removeItem(key);
        } catch (ex) {
            done = false;
        }

        return done;
    }

}

export const localStorage = new Storage();