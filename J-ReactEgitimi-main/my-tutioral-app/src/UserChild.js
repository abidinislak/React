export default function UserChild({ user, index }) {    
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>
                <button>Güncelle</button>
                <button>Sil</button>
            </td>
        </tr>
    )
}