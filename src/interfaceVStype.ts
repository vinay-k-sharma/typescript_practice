type Users = {
    name: string
}

type Admin = Users & {
    admin_id: number
}

const vinay: Admin = {
    name: 'vinay sharma',
    admin_id: 32
}