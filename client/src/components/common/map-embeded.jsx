import React from 'react'

const MapEmbeded = () => {
    return (
        <iframe
            title='AK Decoration - Kanyakuamri district, Tamilnadu'
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d866.2109679928149!2d77.26528692841889!3d8.295697999481561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnNDQuNSJOIDc3wrAxNSc1Ny40IkU!5e1!3m2!1sen!2sin!4v1781690897761!5m2!1sen!2sin"
            className="w-full h-112.5 md:h-137.5"
            style={{ border: 0 }}
            allowFullScreen
            loading="easy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    )
}

export default MapEmbeded;