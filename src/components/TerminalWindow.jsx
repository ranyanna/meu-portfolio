function TerminalWindow() {
    return (
        <div className="terminal" aria-hidden="true">
            <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="terminal-title">ranyanna</p>
            </div>

            <div className="terminal-body">
                <p>
                    <span className="terminal-prompt">$</span>
                    cat lema.txt
                </p>
                <p className="terminal-output">Inserir algo aqui</p>
                <p>
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cursor"></span>
                </p>
            </div>
        </div>
    );
}

export default TerminalWindow;