import { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState({})

    const validate = (event) => {
        event.preventDefault()

        const nextErrors = {
            username: username.trim().length < 8 ? 'Username must be at least 8 characters long.' : '',
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Enter a valid email address.',
            password: password.length < 8 ? 'Password must be at least 8 characters long.' : '',
            confirmPassword: password !== confirmPassword ? "Passwords don't match." : '',
        }

        setErrors(nextErrors)
        setValid(Object.fromEntries(Object.entries(nextErrors).map(([field, error]) => [field, !error])))

        if (Object.values(nextErrors).every((error) => !error)) {
            alert('Form submitted successfully!')
        }
    }

    const inputStyle = (field) => ({
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px 14px',
        border: `1px solid ${valid[field] ? '#198754' : errors[field] ? '#dc3545' : '#ced4da'}`,
        borderRadius: '8px',
        fontSize: '16px',
        outlineColor: '#5b6ee1',
    })

    const errorStyle = { color: '#dc3545', fontSize: '13px', margin: '-8px 0 2px' }

    return (
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px', background: '#f3f5f9', fontFamily: 'Arial, sans-serif' }}>
            <section style={{ width: '100%', maxWidth: '420px', overflow: 'hidden', borderRadius: '16px', background: '#fff', boxShadow: '0 12px 35px rgba(25, 35, 60, 0.14)' }}>
                <div
                    role="img"
                    aria-label="Scenic mountain landscape"
                    style={{ height: '180px', backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <form onSubmit={validate} noValidate style={{ display: 'grid', gap: '14px', padding: '28px' }}>
                    <h2 style={{ margin: '0 0 4px', color: '#20283a' }}>Create account</h2>

                    <input type="text" placeholder="Name" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} style={inputStyle('username')} />
                    {errors.username && <p style={errorStyle}>{errors.username}</p>}

                    <input type="email" placeholder="Email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} style={inputStyle('email')} />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}

                    <input type="password" placeholder="Password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} style={inputStyle('password')} />
                    {errors.password && <p style={errorStyle}>{errors.password}</p>}

                    <input type="password" placeholder="Confirm password" autoComplete="new-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} style={inputStyle('confirmPassword')} />
                    {errors.confirmPassword && <p style={errorStyle}>{errors.confirmPassword}</p>}

                    <button type="submit" style={{ padding: '12px', border: 0, borderRadius: '8px', background: '#5265d7', color: '#fff', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>
                        Submit
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Form
