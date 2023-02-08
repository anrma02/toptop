import * as request from '~/utils/request';

export const search = async (q, tyle = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type: 'less',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
