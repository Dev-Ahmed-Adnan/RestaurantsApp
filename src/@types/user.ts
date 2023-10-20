export interface ContactType {
    mobile: Array<string>;
    name: string;
    user: UserTypes;
}

export interface UserTypes {
    id: number;
    username: string;
    mobile: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    color: string;
    unReadNotificationsCount: number;
    about: string;
    info: {
        id: number;
        userId: number;
        company: string;
        title: string;
        facebook: string;
        linkedIn: string;
        twitter: string;
        youtube: string;
        instagram: string;
        website: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: null;
    };
    chatSettings: {
        id: number;
        userId: number;
        displayStatus: boolean;
        lastSeen: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    };
    privateBots: Array<{
        id: number;
        name: string;
        private: boolean;
        image: string;
        type: "privateBot";
        createdAt: string;
        updatedAt: string;
        deletedAt: null;
        ChatUser: {
            id: number;
            chatId: number;
            userId: number;
            isAdmin: boolean;
            createdAt: string;
            updatedAt: string;
            deletedAt: null;
        };
    }>;
}
export interface UserResponseTypes {
    message: string;
    data: {
        user: UserTypes;
        token: string;
    };
}

export interface LoginTypes {
    mobile: string;
    password: string;
    deviceToken: string;
}
export interface SignUpPhoneStepTypes {
    mobile: string;
}
export interface ForgotPasswordTypes {
    mobile: string;
}
export interface VerificationCodeTypes {
    mobile: string;
    code: string;
}
export interface ResetPasswordTypes {
    mobile: string;
    code?: string;
    password: string;
    confirmPassword?: string;
}
export interface SignUpCompleteStepTypes {
    username: string;
    password: string;
    mobile: string;
    email: string;
    firstName: string;
    lastName: string;
}
export type UpdateUserResponse = {
    message: string;
    data: Record<keyof UserTypes, any>;
};
export interface RegisterTypes {
    application_id?: number;
    lang_id?: number;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirmation: string;
    city_id: string;
}

export interface UpdateProfileTypes {
    application_id?: number;
    lang_id?: number;
    email: string;
    mobile: string;
    first_name: string;
    last_name: string;
    city_id: string;
    full_name?: string;
    photo?: string;
    birthdate?: string;
    gender_id?: string;
}

export interface VerifyEmailVerificationCodeTypes {
    email_verification_code: string;
    email: string;
}

export type NotificationTypes = {
    id: number;
    userId: number;
    senderId: number;
    typeId: number;
    actionTypeId: number;
    entityId: number;
    isRead: boolean;
    createdAt: string;
    updatedAt: string;
    order: {
        id: number;
        subTotalPrice: string;
        totalPrice: string;
        pageId: number;
        userId: number;
    };
    event: {
        id: number;
        title: string;
        endDate: string;
        startDate: string;
        creator: {
            id: number;
            username: string;
            image: string;
            firstName: string;
            lastName: string;
            mobile: string;
            email: string;
            color: string;
        };
    };
    title: string;
    task: {
        id: 104;
        title: "Test";
        endDate: null;
        startDate: "2022-05-30T16:29:33.000Z";
        creator: {
            id: number;
            username: string;
            image: string;
            firstName: string;
            lastName: string;
            mobile: string;
            email: string;
            color: string;
        };
        status: {
            userId: number;
            progress: number;
            createdAt: string;
        };
    };
    status: {
        userId: number;
        // status: "creator",
        progress: number;
        createdAt: string;
    };
    body: string;
    notifyType:
        | "order_create"
        | "comment_create"
        | "event_invite"
        | "task_assigned"
        | "event_update"
        | "task_change_status";
};
export interface CityTypes {
    id: number;
    name: string;
    code: string;
    longitude: string;
    latitude: string;
    country_id: number;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
}
export interface GenderTypes {
    id: number;
    name: string;
}
