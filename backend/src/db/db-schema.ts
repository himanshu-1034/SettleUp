import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    gender: {type: String, required: false},
    contact: {
        countryCode: {type: String, required: false},
        mdn: {type: String, required: false},
        email: {type: String, required: true},
    },
    auth: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false},
    }
})

export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUsersByEmail = (email: string) => UserModel.findOne({'contact.email': email});
export const getUserByUserName = (userName: string) => UserModel.findOne({'userName': userName});
export const getUserBySessionToken = (token: string) => UserModel.findOne({'auth.sessionToken': token});
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (user: Record<string, any>) => new UserModel(user).save().then((addedUser) => addedUser.toObject());
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id});
export const updateUserByID = (id: string, user: Record<string, any>) => UserModel.findByIdAndUpdate(id, user).then((updatedUser) => updatedUser.toObject());