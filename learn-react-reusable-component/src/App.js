import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{
                    name: "ABC", imageUrl: "https://i.pinimg.com/originals/9a/64/e9/9a64e9b56d9074aaba0d09ab3c5d52e6.jpg",
                    phone: "9989890801212",
                    email: "eaffas@afds.com"
                }}
            />
            <ContactCard
                contact={{
                    name: "QEWRE",
                    imageUrl: "https://i.pinimg.com/originals/9a/64/e9/9a64e9b56d9074aaba0d09ab3c5d52e6.jpg",
                    phone: "99898909009808",
                    email: "eaffas@afds.com"
                }}
            />
            <ContactCard
                contact={{
                    name: "DFSWE",
                    imageUrl: "https://i.pinimg.com/originals/9a/64/e9/9a64e9b56d9074aaba0d09ab3c5d52e6.jpg",
                    phone: "998989023238",
                    email: "eaffas@afds.com"
                }}
            />
            <ContactCard
                contact={{
                    name: "DFDSFL",
                    imageUrl: "https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/788f71d98f0797ae0cd7daf02370cf76ec538761.jpg",
                    phone: "99898908054665",
                    email: "eaffas@afds.com"
                }}
            />

        </div>
    )
}

export default App