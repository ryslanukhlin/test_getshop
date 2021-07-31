export type TValidateSchema = {
    valid: boolean;
    number: string;
    local_format: string;
    international_format: string;
    country_prefix: string;
    country_code: string;
    country_name: string;
    location: string;
    carrier: string;
    line_type: string;
};

export enum KeyBoadtEnum {
    Numpad1 = 'Numpad1',
    Numpad2 = 'Numpad2',
    Numpad3 = 'Numpad3',
    Numpad4 = 'Numpad4',
    Numpad5 = 'Numpad5',
    Numpad6 = 'Numpad6',
    Numpad7 = 'Numpad7',
    Numpad8 = 'Numpad8',
    Numpad9 = 'Numpad9',
    Numpad0 = 'Numpad0',
    Backspace = 'Backspace',
}
