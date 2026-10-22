function SectionTitle({ children }) {
    return (
        <h2 className="section-title">
            <span aria-hidden="true">{"// "}</span>
            {children}
        </h2>
    );
}

export default SectionTitle;