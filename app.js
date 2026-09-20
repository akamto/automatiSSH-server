const DEFAULTS = [
  { id: "AcceptEnv", name: "AcceptEnv", desc: "Especifica qué variables de entorno enviadas por el cliente se copiarán al entorno de la sesión.", type: "text", value: "", placeholder: "ej: LANG LC_*", enabled: false },
  { id: "AddressFamily", name: "AddressFamily", desc: "Especifica la familia de direcciones IP a utilizar por sshd (IPv4, IPv6 o ambas).", type: "select", options: ["any", "inet", "inet6"], value: "any", enabled: false },
  { id: "AllowAgentForwarding", name: "AllowAgentForwarding", desc: "Especifica si se permite el reenvío del agente de autenticación ssh-agent.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "AllowGroups", name: "AllowGroups", desc: "Restringe el inicio de sesión únicamente a los usuarios pertenecientes a los grupos indicados.", type: "text", value: "", placeholder: "patrones de grupo", enabled: false },
  { id: "AllowStreamLocalForwarding", name: "AllowStreamLocalForwarding", desc: "Especifica si se permite el reenvío de sockets de dominio Unix (StreamLocal).", type: "select", options: ["yes", "all", "no", "local", "remote"], value: "yes", enabled: false },
  { id: "AllowTcpForwarding", name: "AllowTcpForwarding", desc: "Especifica si se permite el reenvío de puertos TCP.", type: "select", options: ["yes", "all", "no", "local", "remote"], value: "yes", enabled: false },
  { id: "AllowUsers", name: "AllowUsers", desc: "Restringe el inicio de sesión únicamente a las cuentas de usuario que coincidan con los patrones indicados.", type: "text", value: "", placeholder: "usuario o usuario@host", enabled: false },
  { id: "AuthenticationMethods", name: "AuthenticationMethods", desc: "Especifica los métodos de autenticación que deben completarse secuencialmente para conceder acceso.", type: "text", value: "any", placeholder: "lista separada por comas", enabled: false },
  { id: "AuthorizedKeysCommand", name: "AuthorizedKeysCommand", desc: "Especifica un programa externo ejecutable para consultar las claves públicas del usuario.", type: "text", value: "none", placeholder: "ruta absoluta a programa", enabled: false },
  { id: "AuthorizedKeysCommandUser", name: "AuthorizedKeysCommandUser", desc: "Especifica el usuario del sistema bajo el cual se ejecutará el comando indicado en AuthorizedKeysCommand.", type: "text", value: "", placeholder: "nombre de usuario", enabled: false },
  { id: "AuthorizedKeysFile", name: "AuthorizedKeysFile", desc: "Especifica los archivos que contienen las claves públicas autorizadas para la autenticación de usuarios.", type: "text", value: ".ssh/authorized_keys .ssh/authorized_keys2", placeholder: "rutas o none", enabled: false },
  { id: "AuthorizedPrincipalsCommand", name: "AuthorizedPrincipalsCommand", desc: "Especifica un programa para generar la lista de principales de certificados permitidos.", type: "text", value: "none", placeholder: "ruta absoluta a programa", enabled: false },
  { id: "AuthorizedPrincipalsCommandUser", name: "AuthorizedPrincipalsCommandUser", desc: "Especifica la cuenta de usuario bajo la cual se ejecuta AuthorizedPrincipalsCommand.", type: "text", value: "", placeholder: "nombre de usuario", enabled: false },
  { id: "AuthorizedPrincipalsFile", name: "AuthorizedPrincipalsFile", desc: "Especifica el archivo que lista los nombres principales aceptados para la autenticación basada en certificados.", type: "text", value: "none", placeholder: "ruta de archivo", enabled: false },
  { id: "Banner", name: "Banner", desc: "Muestra el contenido del archivo especificado al usuario remoto antes de permitir el proceso de autenticación.", type: "text", value: "none", placeholder: "ruta de archivo", enabled: false },
  { id: "CASignatureAlgorithms", name: "CASignatureAlgorithms", desc: "Especifica qué algoritmos están permitidos para la firma de certificados por parte de Autoridades de Certificación (CA).", type: "text", value: "", placeholder: "algoritmos o sintaxis +/-", enabled: false },
  { id: "ChannelTimeout", name: "ChannelTimeout", desc: "Configura si sshd debe cerrar automáticamente canales inactivos y tras cuánto tiempo.", type: "text", value: "", placeholder: "ej: session=5m", enabled: false },
  { id: "ChrootDirectory", name: "ChrootDirectory", desc: "Especifica la ruta del directorio al que se le aplicará un chroot tras autenticar exitosamente al usuario.", type: "text", value: "none", placeholder: "ruta de directorio", enabled: false },
  { id: "Ciphers", name: "Ciphers", desc: "Especifica los cifrados simétricos permitidos para la protección del tráfico de la sesión.", type: "text", value: "chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com", placeholder: "lista de cifrados", enabled: false },
  { id: "ClientAliveCountMax", name: "ClientAliveCountMax", desc: "Establece el número máximo de mensajes de comprobación de cliente enviados sin recibir respuesta antes de desconectar.", type: "text", value: "3", placeholder: "número entero", enabled: false },
  { id: "ClientAliveInterval", name: "ClientAliveInterval", desc: "Intervalo de tiempo en segundos tras el cual el servidor envía un mensaje para solicitar respuesta al cliente si no hay tráfico.", type: "text", value: "0", placeholder: "segundos", enabled: false },
  { id: "Compression", name: "Compression", desc: "Especifica si la compresión de datos está habilitada después de que el usuario se autentique correctamente.", type: "select", options: ["yes", "delayed", "no"], value: "yes", enabled: false },
  { id: "DenyGroups", name: "DenyGroups", desc: "Deniega explícitamente el inicio de sesión a los usuarios pertenecientes a los grupos indicados.", type: "text", value: "", placeholder: "patrones de grupo", enabled: false },
  { id: "DenyUsers", name: "DenyUsers", desc: "Deniega explícitamente el inicio de sesión a las cuentas de usuario que coincidan con los patrones indicados.", type: "text", value: "", placeholder: "usuario o usuario@host", enabled: false },
  { id: "DisableForwarding", name: "DisableForwarding", desc: "Desactiva de forma global todos los reenvíos (X11, agente SSH, TCP y StreamLocal), anulando otras opciones.", type: "select", options: ["yes", "no"], value: "no", enabled: false },
  { id: "ExposeAuthInfo", name: "ExposeAuthInfo", desc: "Escribe un archivo temporal con métodos y credenciales de autenticación usadas, exponiendo la ruta en SSH_USER_AUTH.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "FingerprintHash", name: "FingerprintHash", desc: "Especifica el algoritmo hash utilizado al registrar en los logs las huellas digitales de las claves.", type: "select", options: ["sha256", "md5"], value: "sha256", enabled: false },
  { id: "ForceCommand", name: "ForceCommand", desc: "Fuerza la ejecución del comando especificado ignorando el comando enviado por el cliente.", type: "text", value: "none", placeholder: "comando o internal-sftp", enabled: false },
  { id: "GatewayPorts", name: "GatewayPorts", desc: "Especifica si se permite a hosts remotos conectarse a los puertos reenviados asignados al cliente.", type: "select", options: ["no", "yes", "clientspecified"], value: "no", enabled: false },
  { id: "GSSAPIAuthentication", name: "GSSAPIAuthentication", desc: "Especifica si se permite la autenticación de usuarios basada en la infraestructura GSSAPI.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "GSSAPICleanupCredentials", name: "GSSAPICleanupCredentials", desc: "Especifica si se borra automáticamente la caché de credenciales GSSAPI del usuario al cerrar sesión.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "GSSAPIStrictAcceptorCheck", name: "GSSAPIStrictAcceptorCheck", desc: "Determina si se exige coincidencia estricta de la identidad del aceptor GSSAPI con el nombre de host del servidor.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "HostbasedAcceptedAlgorithms", name: "HostbasedAcceptedAlgorithms", desc: "Especifica los algoritmos de firma aceptados para la autenticación basada en host (Hostbased).", type: "text", value: "", placeholder: "algoritmos o sintaxis +/-", enabled: false },
  { id: "HostbasedAuthentication", name: "HostbasedAuthentication", desc: "Especifica si se permite la autenticación mediante archivos rhosts/hosts.equiv combinados con clave pública del host cliente.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "HostbasedUsesNameFromPacketOnly", name: "HostbasedUsesNameFromPacketOnly", desc: "Define si sshd confía en el nombre enviado por el cliente en lugar de realizar una resolución DNS inversa de la IP.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "HostCertificate", name: "HostCertificate", desc: "Especifica el archivo que contiene el certificado público que valida la clave privada del servidor.", type: "text", value: "", placeholder: "ruta a certificado del host", enabled: false },
  { id: "HostKey", name: "HostKey", desc: "Especifica los archivos que contienen las claves privadas de host utilizadas por el demonio SSH.", type: "text", value: "/etc/ssh/ssh_host_ed25519_key", placeholder: "ruta de clave privada", enabled: false },
  { id: "HostKeyAgent", name: "HostKeyAgent", desc: "Identifica el socket UNIX utilizado para comunicarse con un agente que almacena las claves privadas del host.", type: "text", value: "", placeholder: "socket Unix o SSH_AUTH_SOCK", enabled: false },
  { id: "HostKeyAlgorithms", name: "HostKeyAlgorithms", desc: "Especifica los algoritmos de firma de clave de host que el servidor ofrecerá durante la negociación.", type: "text", value: "", placeholder: "algoritmos o sintaxis +/-", enabled: false },
  { id: "IgnoreRhosts", name: "IgnoreRhosts", desc: "Especifica si se ignoran los archivos .rhosts y .shosts del directorio personal del usuario durante HostbasedAuthentication.", type: "select", options: ["yes", "shosts-only", "no"], value: "yes", enabled: false },
  { id: "IgnoreUserKnownHosts", name: "IgnoreUserKnownHosts", desc: "Especifica si sshd debe ignorar el archivo known_hosts del usuario durante la autenticación por host.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "Include", name: "Include", desc: "Incluye archivos de configuración adicionales que se procesarán en orden léxico.", type: "text", value: "", placeholder: "ej: /etc/ssh/sshd_config.d/*.conf", enabled: false },
  { id: "IPQoS", name: "IPQoS", desc: "Especifica la clase de servicio IP ToS o DSCP asignada al tráfico de la conexión SSH.", type: "text", value: "af21 cs1", placeholder: "valores QoS/DSCP", enabled: false },
  { id: "KbdInteractiveAuthentication", name: "KbdInteractiveAuthentication", desc: "Especifica si se permite la autenticación interactiva por teclado. Alias actualizado de ChallengeResponseAuthentication.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "KerberosAuthentication", name: "KerberosAuthentication", desc: "Especifica si la contraseña proporcionada por el usuario se validará a través de un servidor Kerberos KDC.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "KerberosGetAFSToken", name: "KerberosGetAFSToken", desc: "Intenta obtener un token de acceso AFS antes de acceder al home del usuario si Kerberos 5 y AFS están activos.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "KerberosOrLocalPasswd", name: "KerberosOrLocalPasswd", desc: "Si falla la autenticación Kerberos, especifica si se intenta validar la contraseña con el sistema local (/etc/passwd).", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "KerberosTicketCleanup", name: "KerberosTicketCleanup", desc: "Especifica si se destruye automáticamente el archivo de tickets Kerberos del usuario al cerrar la sesión.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "KexAlgorithms", name: "KexAlgorithms", desc: "Especifica los algoritmos permitidos para el intercambio de claves (KEX) durante el establecimiento del túnel.", type: "text", value: "sntrup761x25519-sha512,mlkem768x25519-sha256,curve25519-sha256,ecdh-sha2-nistp256,diffie-hellman-group-exchange-sha256", placeholder: "lista KEX", enabled: false },
  { id: "ListenAddress", name: "ListenAddress", desc: "Especifica las direcciones IP locales y puertos en los que escucha el demonio sshd.", type: "text", value: "", placeholder: "ip, ip:puerto", enabled: false },
  { id: "LoginGraceTime", name: "LoginGraceTime", desc: "Tiempo límite tras el cual el servidor desconecta a un cliente si no ha completado el inicio de sesión.", type: "text", value: "120", placeholder: "segundos (0 = sin límite)", enabled: false },
  { id: "LogLevel", name: "LogLevel", desc: "Define el nivel de verbosidad o detalle utilizado en los registros (logs) del sistema generados por sshd.", type: "select", options: ["INFO", "QUIET", "FATAL", "ERROR", "VERBOSE", "DEBUG", "DEBUG1", "DEBUG2", "DEBUG3"], value: "INFO", enabled: false },
  { id: "LogVerbose", name: "LogVerbose", desc: "Permite forzar registros detallados para archivos de código, funciones o líneas específicas con fines de depuración.", type: "text", value: "", placeholder: "archivo:función:línea", enabled: false },
  { id: "MACs", name: "MACs", desc: "Especifica los algoritmos de comprobación de integridad de mensajes (MAC) permitidos.", type: "text", value: "hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com", placeholder: "lista MAC", enabled: false },
  { id: "Match", name: "Match", desc: "Introduce un bloque condicional cuyos parámetros anulan las directivas globales si se cumplen las condiciones.", type: "text", value: "", placeholder: "ej: User admin Address 192.168.1.0/24", enabled: false },
  { id: "MaxAuthTries", name: "MaxAuthTries", desc: "Especifica el número máximo de intentos fallidos de autenticación permitidos por cada conexión.", type: "text", value: "6", placeholder: "número entero", enabled: false },
  { id: "MaxSessions", name: "MaxSessions", desc: "Define el número máximo de sesiones paralelas (shell, ejecuciones o subsistemas) abiertas por conexión TCP.", type: "text", value: "10", placeholder: "número entero", enabled: false },
  { id: "MaxStartups", name: "MaxStartups", desc: "Especifica el número máximo de conexiones concurrentes no autenticadas pendientes en el demonio SSH.", type: "text", value: "10:30:100", placeholder: "inicio:tasa:límite", enabled: false },
  { id: "ModuliFile", name: "ModuliFile", desc: "Especifica el archivo que contiene los números primos para los métodos de intercambio de claves Diffie-Hellman Group Exchange.", type: "text", value: "/etc/moduli", placeholder: "ruta de archivo", enabled: false },
  { id: "PAMServiceName", name: "PAMServiceName", desc: "Nombre del servicio registrado en PAM para la autenticación, autorización y control de sesiones cuando UsePAM está activo.", type: "text", value: "sshd", placeholder: "nombre servicio PAM", enabled: false },
  { id: "PasswordAuthentication", name: "PasswordAuthentication", desc: "Especifica si se permite la autenticación estándar mediante contraseña.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "PermitEmptyPasswords", name: "PermitEmptyPasswords", desc: "Define si se permite el inicio de sesión a cuentas del sistema que tienen contraseñas en blanco.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "PermitListen", name: "PermitListen", desc: "Especifica las direcciones y puertos en los cuales un reenvío remoto de puerto TCP tiene permitido escuchar.", type: "text", value: "any", placeholder: "none, puerto, host:puerto", enabled: false },
  { id: "PermitOpen", name: "PermitOpen", desc: "Especifica los destinos permitidos hacia los cuales se pueden realizar reenvíos de puertos TCP.", type: "text", value: "any", placeholder: "none, host:puerto", enabled: false },
  { id: "PermitRootLogin", name: "PermitRootLogin", desc: "Especifica si el usuario administrador root puede iniciar sesión mediante SSH y bajo qué restricciones.", type: "select", options: ["prohibit-password", "yes", "forced-commands-only", "no"], value: "prohibit-password", enabled: false },
  { id: "PermitTTY", name: "PermitTTY", desc: "Especifica si se permite la asignación de terminales virtuales (pseudoterminales / TTY).", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "PermitTunnel", name: "PermitTunnel", desc: "Especifica si se permite el reenvío de dispositivos de túnel de red de capa 2 o capa 3 (tun/tap).", type: "select", options: ["no", "yes", "point-to-point", "ethernet"], value: "no", enabled: false },
  { id: "PermitUserEnvironment", name: "PermitUserEnvironment", desc: "Define si sshd procesa el archivo environment y las opciones environment de authorized_keys.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "PermitUserRC", name: "PermitUserRC", desc: "Especifica si se ejecuta automáticamente el archivo de configuración rc del usuario al conectar.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "PerSourceMaxStartups", name: "PerSourceMaxStartups", desc: "Especifica el límite de conexiones no autenticadas simultáneas permitidas desde una misma IP de origen.", type: "text", value: "none", placeholder: "número entero", enabled: false },
  { id: "PerSourceNetBlockSize", name: "PerSourceNetBlockSize", desc: "Define la cantidad de bits de la IP de origen que se agrupan para aplicar los límites de PerSourceMaxStartups.", type: "text", value: "32:128", placeholder: "máscara_v4:máscara_v6", enabled: false },
  { id: "PerSourcePenalties", name: "PerSourcePenalties", desc: "Configura penalizaciones e incompatibilidad temporal de conexión ante comportamientos sospechosos o ataques contra sshd.", type: "text", value: "", placeholder: "ej: authfail:5s", enabled: false },
  { id: "PerSourcePenaltyExemptList", name: "PerSourcePenaltyExemptList", desc: "Especifica una lista de direcciones IP o rangos de red exentos de sufrir penalizaciones de PerSourcePenalties.", type: "text", value: "", placeholder: "lista IP/CIDR", enabled: false },
  { id: "PidFile", name: "PidFile", desc: "Especifica la ruta del archivo donde se almacena el ID del proceso (PID) del demonio de SSH.", type: "text", value: "/var/run/sshd.pid", placeholder: "ruta de archivo o none", enabled: false },
  { id: "Port", name: "Port", desc: "Especifica el número de puerto TCP en el cual escucha el demonio sshd.", type: "text", value: "22", placeholder: "número de puerto", enabled: false },
  { id: "PrintLastLog", name: "PrintLastLog", desc: "Especifica si se muestra la fecha y hora del último inicio de sesión del usuario durante el acceso interactivo.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "PrintMotd", name: "PrintMotd", desc: "Especifica si sshd debe imprimir el mensaje del día (/etc/motd) al iniciar sesión en modo interactivo.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "PubkeyAcceptedAlgorithms", name: "PubkeyAcceptedAlgorithms", desc: "Especifica los algoritmos de firma aceptados para la autenticación basada en clave pública.", type: "text", value: "", placeholder: "algoritmos o sintaxis +/-", enabled: false },
  { id: "PubkeyAuthOptions", name: "PubkeyAuthOptions", desc: "Configura exigencias adicionales para la autenticación por clave pública (p. ej. presencia física o PIN en claves FIDO).", type: "select", options: ["none", "touch-required", "verify-required"], value: "none", enabled: false },
  { id: "PubkeyAuthentication", name: "PubkeyAuthentication", desc: "Especifica si se permite la autenticación del usuario mediante clave pública.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "RefuseConnection", name: "RefuseConnection", desc: "Indica a sshd que rechace incondicionalmente la conexión entrante (comúnmente usado dentro de bloques Match).", type: "text", value: "", placeholder: "usar en bloque Match", enabled: false },
  { id: "RekeyLimit", name: "RekeyLimit", desc: "Especifica la cantidad máxima de datos o tiempo transcurrido antes de renegociar la clave de la sesión.", type: "text", value: "default none", placeholder: "límite_datos [límite_tiempo]", enabled: false },
  { id: "RequiredRSASize", name: "RequiredRSASize", desc: "Establece el tamaño mínimo en bits que debe tener una clave RSA para ser aceptada en la autenticación.", type: "text", value: "1024", placeholder: "bits", enabled: false },
  { id: "RevokedKeys", name: "RevokedKeys", desc: "Especifica un archivo de lista de claves públicas revocadas (KRL); las claves en él serán rechazadas.", type: "text", value: "none", placeholder: "ruta de archivo", enabled: false },
  { id: "RDomain", name: "RDomain", desc: "Asigna la sesión del usuario y sus sockets a un dominio de enrutamiento explícito tras autenticarse.", type: "text", value: "", placeholder: "%D o ID de dominio", enabled: false },
  { id: "SecurityKeyProvider", name: "SecurityKeyProvider", desc: "Especifica la ruta a una biblioteca externa para gestionar claves almacenadas en dispositivos de seguridad FIDO.", type: "text", value: "", placeholder: "ruta a biblioteca .so", enabled: false },
  { id: "SetEnv", name: "SetEnv", desc: "Establece una o más variables de entorno fijas en las sesiones secundarias iniciadas por sshd.", type: "text", value: "", placeholder: "NOMBRE=VALOR", enabled: false },
  { id: "SshdSessionPath", name: "SshdSessionPath", desc: "Sobrescribe la ruta predeterminada al binario sshd-session ejecutado para procesar cada conexión.", type: "text", value: "/usr/libexec/sshd-session", placeholder: "ruta de ejecutable", enabled: false },
  { id: "StreamLocalBindMask", name: "StreamLocalBindMask", desc: "Establece la máscara umask de creación de archivos usada al crear sockets Unix para reenvío de puertos.", type: "text", value: "0177", placeholder: "máscara octal", enabled: false },
  { id: "StreamLocalBindUnlink", name: "StreamLocalBindUnlink", desc: "Especifica si se elimina un archivo socket Unix existente antes de crear uno nuevo al reenviar un puerto.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "StrictModes", name: "StrictModes", desc: "Especifica si sshd debe verificar la propiedad y los permisos del directorio home del usuario antes de permitir el acceso.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "Subsystem", name: "Subsystem", desc: "Configura un subsistema externo ejecutable (por ejemplo, el servidor de transferencia de archivos SFTP).", type: "text", value: "", placeholder: "ej: sftp /usr/lib/openssh/sftp-server", enabled: false },
  { id: "SyslogFacility", name: "SyslogFacility", desc: "Especifica la instalación o categoría del sistema de registro (syslog facility) usada por sshd.", type: "select", options: ["AUTH", "DAEMON", "USER", "LOCAL0", "LOCAL1", "LOCAL2", "LOCAL3", "LOCAL4", "LOCAL5", "LOCAL6", "LOCAL7"], value: "AUTH", enabled: false },
  { id: "TCPKeepAlive", name: "TCPKeepAlive", desc: "Especifica si se envían mensajes TCP keepalive periódicos para detectar caídas de red o desconexiones de clientes.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "TrustedUserCAKeys", name: "TrustedUserCAKeys", desc: "Especifica un archivo con las claves públicas de las CA autorizadas para firmar certificados de usuario.", type: "text", value: "none", placeholder: "ruta de archivo", enabled: false },
  { id: "UnusedConnectionTimeout", name: "UnusedConnectionTimeout", desc: "Cierra automáticamente las conexiones de clientes que no contengan ningún canal abierto tras el tiempo especificado.", type: "text", value: "none", placeholder: "segundos o 5m, 1h", enabled: false },
  { id: "UseDNS", name: "UseDNS", desc: "Especifica si sshd debe realizar búsquedas DNS inversas de la IP del cliente para validar que el nombre coincide.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "UsePAM", name: "UsePAM", desc: "Habilita el módulo de autenticación enchufable (PAM) para autenticación, control de cuentas y sesión.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "VersionAddendum", name: "VersionAddendum", desc: "Permite agregar un texto o banner adicional a la versión del protocolo SSH devuelta por el servidor.", type: "text", value: "none", placeholder: "texto libre", enabled: false },
  { id: "X11DisplayOffset", name: "X11DisplayOffset", desc: "Especifica el primer número de pantalla (display) disponible asignado para el reenvío gráfico X11.", type: "text", value: "10", placeholder: "número entero", enabled: false },
  { id: "X11Forwarding", name: "X11Forwarding", desc: "Especifica si se permite el reenvío de la interfaz gráfica X11 a través del túnel SSH.", type: "select", options: ["no", "yes"], value: "no", enabled: false },
  { id: "X11UseLocalhost", name: "X11UseLocalhost", desc: "Define si el servidor de reenvío X11 se vincula solo a la interfaz de loopback (127.0.0.1) o a todas las interfaces.", type: "select", options: ["yes", "no"], value: "yes", enabled: false },
  { id: "XAuthLocation", name: "XAuthLocation", desc: "Especifica la ruta completa donde se encuentra el ejecutable xauth en el sistema.", type: "text", value: "/usr/X11R6/bin/xauth", placeholder: "ruta o none", enabled: false },
];

// Plantillas: Password vs Pubkey sobre directivas reales
const TEMPLATES = {
  password: {
    PermitRootLogin: { value: "no", enabled: true },
    PasswordAuthentication: { value: "yes", enabled: true },
    KbdInteractiveAuthentication: { value: "yes", enabled: true },
    UsePAM: { value: "yes", enabled: true },
    PubkeyAuthentication: { value: "no", enabled: true },
    Port: { value: "2222", enabled: true },
    MaxAuthTries: { value: "3", enabled: true },
    AddressFamily: { value: "any", enabled: true },
    PermitEmptyPasswords: { value: "no", enabled: true },
  },
  pubkey: {
    PermitRootLogin: { value: "no", enabled: true },
    PasswordAuthentication: { value: "no", enabled: true },
    KbdInteractiveAuthentication: { value: "no", enabled: true },
    UsePAM: { value: "yes", enabled: true },
    PubkeyAuthentication: { value: "yes", enabled: true },
    Port: { value: "2222", enabled: true },
    MaxAuthTries: { value: "3", enabled: true },
    AddressFamily: { value: "any", enabled: true },
    PermitEmptyPasswords: { value: "no", enabled: true },
  },
};

// Validación cliente para evitar generar un sshd_config inválido.
// Devuelve null si es válido, o un mensaje de error si no lo es.
const INT_RE = /^\d+$/;
const TIME_RE = /^\d+[smhdw]?$/;
const MAXSTARTUPS_RE = /^(\d+|\d+:\d+:\d+)$/;
const MASK_RE = /^0?[0-7]{3,4}$/;
const QOS_RE = /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)?$/;

function validateValue(item) {
  const v = String(item.value ?? "").trim();
  if (!v) return null; // el vacío se gestiona aparte (se omite)
  if (item.type === "select" && Array.isArray(item.options)) {
    if (!item.options.includes(v)) return "Valor no permitido para " + item.name;
    return null;
  }
  switch (item.id) {
    case "Port":
      // Acepta un puerto o lista separada por espacios/comas (sshd permite varios Port)
      if (!/^(\d+[\s,]*)+$/.test(v)) return "Port: lista de puertos 1-65535";
      if (!v.split(/[\s,]+/).filter(Boolean).every((p) => INT_RE.test(p) && +p >= 1 && +p <= 65535)) return "Port: cada puerto debe estar entre 1 y 65535";
      return null;
    case "MaxAuthTries":
      return INT_RE.test(v) && +v >= 1 && +v <= 100 ? null : "MaxAuthTries: entero 1-100";
    case "MaxSessions":
    case "ClientAliveCountMax":
    case "ClientAliveInterval":
    case "X11DisplayOffset":
      return INT_RE.test(v) && +v >= 0 && +v <= 100000 ? null : item.id + ": entero >= 0";
    case "RequiredRSASize":
      return INT_RE.test(v) && +v >= 1024 && +v <= 16384 ? null : "RequiredRSASize: 1024-16384 bits";
    case "LoginGraceTime":
    case "UnusedConnectionTimeout":
      return TIME_RE.test(v) ? null : item.id + ": formato tiempo (ej: 120, 2m, 1h)";
    case "MaxStartups":
      return MAXSTARTUPS_RE.test(v.replace(/\s+/g, "")) ? null : "MaxStartups: N o inicio:tasa:límite (ej: 10:30:100)";
    case "StreamLocalBindMask":
      return MASK_RE.test(v) ? null : "StreamLocalBindMask: máscara octal (ej: 0177)";
    case "IPQoS":
      return QOS_RE.test(v) ? null : "IPQoS: valores QoS/DSCP";
    case "ListenAddress":
      // Permite vacío (= todas) o ip / ip:puerto, sin validar exhaustivamente
      return /^[\da-fA-F.:\s]+(:\d+)?$/.test(v) || v.includes("/") ? null : null;
    default:
      // Límite de seguridad: evita líneas gigantes o con saltos que romperían el heredoc
      if (v.length > 500) return "Valor demasiado largo (máx 500)";
      if (/[\r\n]/.test(v)) return "El valor no puede contener saltos de línea";
      return null;
  }
}

function cloneDefaults() {
  if (typeof structuredClone === "function") return structuredClone(DEFAULTS);
  return JSON.parse(JSON.stringify(DEFAULTS));
}

let state = cloneDefaults();
let query = "";

// URL del repositorio
const REPO_URL = "https://github.com/akamto/automatiSSH-server";

// Orden manual (ids) + persistencia en localStorage
const STORE_KEY = "automatiSSH-state-v1";
let customOrder = null; // null = orden original del .txt

// DnD activo cuando no hay búsqueda (vale para ratón, táctil y teclado)
function dndOn() {
  return !query.trim();
}

function txtOrder() {
  return DEFAULTS.map((d) => d.id);
}

function baseOrder() {
  const txt = txtOrder();
  if (!Array.isArray(customOrder) || !customOrder.length) return txt;
  const known = new Set(txt);
  const kept = customOrder.filter((id) => known.has(id));
  const missing = txt.filter((id) => !kept.includes(id));
  return [...kept, ...missing];
}

// Orden visible: activadas arriba (orden relativo), resto debajo
function orderedItems() {
  const base = baseOrder();
  const byId = new Map(state.map((d) => [d.id, d]));
  const on = [], off = [];
  base.forEach((id) => {
    const it = byId.get(id);
    if (!it) return;
    (it.enabled ? on : off).push(it);
  });
  state.forEach((d) => {
    if (!base.includes(d.id)) (d.enabled ? on : off).push(d);
  });
  return [...on, ...off];
}

function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      order: customOrder,
      values: Object.fromEntries(state.map((d) => [d.id, d.value])),
      enabled: Object.fromEntries(state.map((d) => [d.id, d.enabled])),
    }));
  } catch {}
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    if (!s || typeof s !== "object") return;
    if (Array.isArray(s.order)) {
      const known = new Set(txtOrder());
      customOrder = s.order.filter((id) => known.has(id));
      if (!customOrder.length) customOrder = null;
    }
    state.forEach((d) => {
      if (s.values && s.values[d.id] !== undefined) {
        let v = String(s.values[d.id]).slice(0, 500);
        // Valida selects contra opciones conocidas, si no coincide se conserva el default
        if (d.type === "select" && Array.isArray(d.options) && !d.options.includes(v)) {
          // valor corrupto: no sobrescribir
        } else {
          d.value = v;
        }
      }
      if (s.enabled && s.enabled[d.id] !== undefined) d.enabled = !!s.enabled[d.id];
    });
  } catch {}
}

const $ = (s) => document.querySelector(s);
const listEl = $("#directiveList");
const previewEl = $("#preview");
const finalEl = $("#finalConfig");
const toastEl = $("#toast");
const dialog = $("#descDialog");
const descTitle = $("#descTitle");
const descBody = $("#descBody");

function toast(msg, type) {
  toastEl.textContent = msg;
  toastEl.classList.toggle("error", type === "error");
  toastEl.classList.add("show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function filtered() {
  const items = orderedItems();
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (d) => d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q)
  );
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Directivas activas para el fichero final:
// - respeta el orden relativo arrastrado por el usuario
// - excluye valores vacíos (config inválida)
// - marca valores con formato inválido (se incluyen pero con aviso)
// - fuerza Match al final (sshd lo exige)
function getActiveDirectives() {
  const all = orderedItems().filter((d) => d.enabled);
  const normal = [];
  const matches = [];
  const skipped = [];
  const invalid = [];
  all.forEach((d) => {
    const v = String(d.value ?? "").trim();
    if (!v) { skipped.push(d.name); return; }
    const err = validateValue(d);
    if (err) invalid.push({ name: d.name, error: err });
    if (d.id === "Match") { matches.push(d); return; }
    normal.push(d);
  });
  return { normal, matches, skipped, invalid };
}

function configLines() {
  const { normal, matches, skipped, invalid } = getActiveDirectives();
  const lines = [...normal, ...matches].map((d) => `${d.name} ${String(d.value).trim()}`);
  return { lines, skipped, invalid, hasMatch: matches.length > 0 };
}

function render() {
  const panel = listEl.closest(".panel");
  const scroll = panel ? panel.scrollTop : 0;
  const ae = document.activeElement;
  const fCard = ae && ae.closest ? (ae.closest(".card") || {}).dataset?.id : null;
  const fAct = ae && ae.dataset ? ae.dataset.act : null;
  const items = filtered();
  const dragOn = dndOn();

  if (!items.length) {
    listEl.innerHTML = `<div class="empty">Sin resultados para “${esc(query)}”</div>`;
  } else {
    listEl.innerHTML = items
      .map(
        (d) => {
        const empty = d.enabled && !String(d.value ?? "").trim();
        const err = d.enabled && !empty ? validateValue(d) : null;
        const invalid = !!(empty || err);
        return `
      <article class="card${d.enabled ? " active" : ""}${invalid ? " invalid" : ""}" data-id="${esc(d.id)}"${err ? ` title="${esc(err)}"` : ""}>
        <span class="drag-handle" role="button" title="${dragOn ? "Arrastrar para reordenar (pulsación larga en táctil, Alt+↑/↓ con teclado)" : "Limpia la búsqueda para reordenar"}" tabindex="0" aria-label="Reordenar ${esc(d.name)}"></span>
        <code class="card-name">${esc(d.name)}</code>
        <div class="card-right">
          ${d.type === "select"
            ? `<select class="card-select" data-act="value" title="${esc(d.name)}" aria-label="Valor de ${esc(d.name)}">
              ${d.options.map((o) => `<option value="${esc(o)}" ${o === d.value ? "selected" : ""}>${esc(o)}</option>`).join("")}
            </select>`
            : `<input type="text" class="card-text" data-act="value" value="${esc(d.value)}" placeholder="${esc(d.placeholder || "")}" spellcheck="false" title="${esc(d.name)}" aria-label="Valor de ${esc(d.name)}" maxlength="500" />`}
          <button class="info-btn" data-act="info" title="Ver descripción" aria-label="Ver descripción de ${esc(d.name)}">?</button>
          <label class="check" title="Incluir en el script">
            <input type="checkbox" data-act="toggle" ${d.enabled ? "checked" : ""} aria-label="Incluir ${esc(d.name)} en el script" />
            <span class="box" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 13 4 4L19 7"/></svg></span>
          </label>
        </div>
      </article>`;
        }
      )
      .join("");
  }
  listEl.classList.toggle("no-drag", !dragOn);

  if (panel) panel.scrollTop = scroll;
  if (fCard && fAct) {
    const el = listEl.querySelector('.card[data-id="' + fCard + '"] [data-act="' + fAct + '"]');
    if (el && el !== ae) { try { el.focus({ preventScroll: true }); } catch { try { el.focus(); } catch {} } }
  }

  renderPreview();
}

function flashCard(id) {
  try {
    const el = listEl.querySelector('.card[data-id="' + id + '"]');
    if (!el) return;
    el.classList.add("just-moved");
    el.scrollIntoView({ block: "nearest" });
    setTimeout(() => el.classList.remove("just-moved"), 700);
  } catch {}
}

// El .sh instala openssh, valida en .new y solo entonces sustituye el archivo real
function buildScript() {
  const { lines, skipped, invalid } = configLines();
  const confLines = lines.length
    ? lines.join("\n")
    : "# (ninguna directiva activada)";
  const skippedComment = skipped.length
    ? `\n# Omitidas por valor vacío: ${skipped.join(", ")}`
    : "";
  const invalidComment = invalid.length
    ? `\n# ADVERTENCIA: revisa estos valores antes de aplicar: ${invalid.map((i) => i.name + " (" + i.error + ")").join("; ")}`
    : "";

  return [
    "#!/bin/bash",
    "# Generado con automatiSSH-server",
    "# Revisa el archivo antes de aplicarlo. Mantén una sesión SSH abierta.",
    "set -euo pipefail",
    'LOG="/var/log/automatiSSH-server.log"',
    "sudo apt-get update | sudo tee \"$LOG\" > /dev/null",
    "sudo apt-get install -y openssh-server | sudo tee -a \"$LOG\" > /dev/null",
    'echo "SSH instalado."',
    "sudo tee /etc/ssh/sshd_config.new > /dev/null <<'EOF'",
    "# Generado con automatiSSH-server",
    confLines + skippedComment + invalidComment,
    "EOF",
    'echo "Configuración escrita en /etc/ssh/sshd_config.new, validando..."',
    "if sudo sshd -t -f /etc/ssh/sshd_config.new 2>&1 | sudo tee -a \"$LOG\"; then",
    '    echo "Configuración correcta."',
    "    sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak",
    '    echo "Backup en /etc/ssh/sshd_config.bak"',
    "    sudo mv /etc/ssh/sshd_config.new /etc/ssh/sshd_config",
    '    echo "Configuración aplicada."',
    '    echo "Recargando servicios..."',
    "    sudo systemctl daemon-reload",
    "    sudo systemctl reload-or-restart ssh",
    "    sudo systemctl reload-or-restart sshd",
    "    sudo systemctl reload-or-restart ssh.socket",
    '    echo "Servicios recargados."',
    "else",
    '    echo "ERROR: Configuración inválida. No se aplicó ningún cambio." >&2',
    '    echo "Revisa /var/log/automatiSSH-server.log" >&2',
    "    exit 1",
    "fi",
  ].join("\n");
}

// Archivo sshd_config resultante (lo que el script dejará en el servidor)
function buildFinalConfig() {
  const { lines, skipped, invalid } = configLines();
  return [
    "# Generado con automatiSSH-server",
    ...(lines.length ? lines : ["# (ninguna directiva activada)"]),
    ...(skipped.length ? [`# Omitidas por valor vacío: ${skipped.join(", ")}`] : []),
    ...(invalid.length ? [`# ADVERTENCIA: revisa estos valores: ${invalid.map((i) => i.name + " (" + i.error + ")").join("; ")}`] : []),
  ].join("\n");
}

function renderPreview() {
  if (previewEl) previewEl.textContent = buildScript();
  if (finalEl) finalEl.textContent = buildFinalConfig();
}

// --- Pestañas del panel derecho (sshd_config por defecto) ---
const TABS = ["final", "sh", "pass", "pub"];
const TAB_KEY = "automatiSSH-tab";
let activeTab = "final";

function selectTab(name, focus) {
  if (!TABS.includes(name)) return;
  activeTab = name;
  try { localStorage.setItem(TAB_KEY, name); } catch {}
  TABS.forEach((t) => {
    const tab = $("#tab-" + t);
    const pane = $("#pane-" + t);
    const on = t === name;
    if (tab) {
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) { try { tab.focus(); } catch {} }
    }
    if (pane) pane.hidden = !on;
  });
}

document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener("click", () => selectTab(tab.id.replace("tab-", ""), false));
});

const tabsEl = document.querySelector(".tabs");
if (tabsEl) tabsEl.addEventListener("keydown", (e) => {
  const i = TABS.indexOf(activeTab);
  let j = null;
  if (e.key === "ArrowRight") j = (i + 1) % TABS.length;
  else if (e.key === "ArrowLeft") j = (i - 1 + TABS.length) % TABS.length;
  else if (e.key === "Home") j = 0;
  else if (e.key === "End") j = TABS.length - 1;
  if (j === null) return;
  e.preventDefault();
  selectTab(TABS[j], true);
});

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); return true; }
    catch { return false; }
    finally { ta.remove(); }
  }
}

// Eventos lista (delegación)
listEl.addEventListener("change", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const item = state.find((d) => d.id === card.dataset.id);
  if (!item) return;
  if (e.target.dataset.act === "toggle") {
    item.enabled = e.target.checked;
    if (item.enabled && !String(item.value ?? "").trim()) {
      toast(`${item.name} activada sin valor: se omitirá hasta que la rellenes`, "error");
    } else if (item.enabled) {
      const err = validateValue(item);
      if (err) toast(`${item.name}: ${err}`, "error");
    }
    save();
    render();
    flashCard(item.id);
    return;
  }
  if (e.target.dataset.act === "value") {
    item.value = String(e.target.value).slice(0, 500);
    const err = validateValue(item);
    if (item.enabled && err) toast(`${item.name}: ${err}`, "error");
    save();
    render();
  }
});

// Edición en vivo de campos de texto sin perder el foco
listEl.addEventListener("input", (e) => {
  if (e.target.dataset.act !== "value" || e.target.tagName !== "INPUT") return;
  const card = e.target.closest(".card");
  const item = state.find((d) => d.id === card.dataset.id);
  if (!item) return;
  item.value = String(e.target.value).slice(0, 500);
  save();
  const err = item.enabled ? validateValue(item) : null;
  const empty = item.enabled && !String(item.value ?? "").trim();
  if (card) card.classList.toggle("invalid", !!(empty || err));
  renderPreview();
});

listEl.addEventListener("click", (e) => {
  const btn = e.target.closest('[data-act="info"]');
  if (!btn) return;
  const card = btn.closest(".card");
  const item = state.find((d) => d.id === card.dataset.id);
  if (!item) return;
  descTitle.textContent = item.name;
  descBody.textContent = item.desc;
  if (typeof dialog.showModal === "function") dialog.showModal();
});

dialog.addEventListener("click", (e) => {
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
});

// --- Drag & drop por Pointer Events (ratón + táctil + pen), sin búsqueda activa ---
const dragHint = $("#dragHint");
const dragStatus = $("#dragStatus");
let drag = null; // {id, pointerId, type, startX, startY, started, target, pos, ghost, chip, srcEl, longT}
let suppressClick = false;
let scrollRaf = 0;
const lastPtr = { x: 0, y: 0 };

function announce(msg) {
  if (dragStatus) dragStatus.textContent = msg;
}

function clearDropMarks() {
  listEl.querySelectorAll(".drop-before,.drop-after").forEach((el) => el.classList.remove("drop-before", "drop-after"));
}

function moveId(id, targetId, pos) {
  const base = baseOrder().filter((x) => x !== id);
  let idx = base.indexOf(targetId);
  if (idx === -1) idx = base.length;
  else if (pos === "after") idx += 1;
  base.splice(idx, 0, id);
  customOrder = base;
}

// Posición visible que ocuparía id si se soltase en (targetId, pos)
function visibleRankAfter(id, targetId, pos) {
  const b = baseOrder().filter((x) => x !== id);
  let i = b.indexOf(targetId);
  if (i === -1) i = b.length;
  else if (pos === "after") i += 1;
  b.splice(i, 0, id);
  const byId = new Map(state.map((d) => [d.id, d]));
  const vis = b.map((x) => byId.get(x)).filter(Boolean);
  const all = [...vis.filter((d) => d.enabled), ...vis.filter((d) => !d.enabled)];
  return { n: all.findIndex((d) => d.id === id) + 1, total: all.length };
}

function interactiveFrom(el) {
  return !!(el && el.closest && el.closest("select,input,button,label,a"));
}

function blockTouch(e) {
  if (drag && drag.started) e.preventDefault();
}

function positionGhost(x, y) {
  if (!drag || !drag.ghost) return;
  const g = drag.ghost;
  const w = g.offsetWidth || 200, h = g.offsetHeight || 40;
  let lx = x + 14, ly = y - h / 2;
  lx = Math.max(8, Math.min(lx, window.innerWidth - w - 8));
  ly = Math.max(8, Math.min(ly, window.innerHeight - h - 8));
  g.style.left = lx + "px";
  g.style.top = ly + "px";
}

function scrollTick() {
  scrollRaf = 0;
  if (!drag || !drag.started) return;
  const panel = listEl.closest(".panel");
  if (panel) {
    const pr = panel.getBoundingClientRect();
    const y = lastPtr.y;
    let v = 0;
    if (y < pr.top + 64) v = -Math.ceil(((pr.top + 64 - y) / 64) * 14) - 2;
    else if (y > pr.bottom - 64) v = Math.ceil(((y - (pr.bottom - 64)) / 64) * 14) + 2;
    if (v) {
      panel.scrollTop += v;
      updateTarget(lastPtr.x, lastPtr.y);
    }
  }
  scrollRaf = requestAnimationFrame(scrollTick);
}

function updateTarget(x, y) {
  clearDropMarks();
  if (!drag) return;
  drag.target = null;
  drag.pos = null;
  const cards = [...listEl.querySelectorAll(".card")].filter((c) => c.dataset.id !== drag.id);
  if (!cards.length) return;
  let t = null;
  for (const c of cards) {
    const r = c.getBoundingClientRect();
    if (y < r.top + r.height / 2) { t = { card: c, pos: "before" }; break; }
  }
  if (!t) t = { card: cards[cards.length - 1], pos: "after" };
  t.card.classList.add(t.pos === "before" ? "drop-before" : "drop-after");
  drag.target = t.card.dataset.id;
  drag.pos = t.pos;
  if (drag.chip) {
    const r = visibleRankAfter(drag.id, drag.target, drag.pos);
    drag.chip.textContent = r.n + " / " + r.total;
  }
}

function startDrag(x, y) {
  if (!drag || drag.started) return;
  drag.started = true;
  clearTimeout(drag.longT);
  const src = listEl.querySelector('.card[data-id="' + drag.id + '"]');
  if (src) {
    src.classList.add("drag-src");
    try { src.setPointerCapture(drag.pointerId); } catch {}
  }
  const item = state.find((d) => d.id === drag.id);
  const g = document.createElement("div");
  g.className = "card drag-ghost";
  const vis = orderedItems();
  const here = vis.findIndex((d) => d.id === drag.id) + 1;
  g.innerHTML = '<code class="card-name">' + esc(item ? item.name : drag.id) + '</code>' +
    '<span class="drag-pos">' + here + " / " + vis.length + "</span>";
  document.body.appendChild(g);
  drag.ghost = g;
  drag.chip = g.querySelector(".drag-pos");
  document.body.classList.add("is-dragging");
  if (dragHint) dragHint.hidden = false;
  if (drag.type !== "mouse") {
    document.addEventListener("touchmove", blockTouch, { passive: false });
    try { if (navigator.vibrate) navigator.vibrate(10); } catch {}
  }
  positionGhost(x, y);
  updateTarget(x, y);
  announce("Arrastrando " + (item ? item.name : drag.id));
  if (!scrollRaf) scrollRaf = requestAnimationFrame(scrollTick);
}

function moveDrag(x, y) {
  lastPtr.x = x;
  lastPtr.y = y;
  positionGhost(x, y);
  updateTarget(x, y);
}

function cleanupDrag() {
  clearTimeout(drag ? drag.longT : 0);
  if (scrollRaf) { cancelAnimationFrame(scrollRaf); scrollRaf = 0; }
  document.removeEventListener("touchmove", blockTouch);
  document.body.classList.remove("is-dragging");
  if (dragHint) dragHint.hidden = true;
  if (drag && drag.ghost) drag.ghost.remove();
  listEl.querySelectorAll(".drag-src").forEach((el) => el.classList.remove("drag-src"));
  clearDropMarks();
}

// FLIP: anima las cards de su posición anterior a la nueva
function snapshotTops() {
  const m = new Map();
  listEl.querySelectorAll(".card").forEach((el) => m.set(el.dataset.id, el.getBoundingClientRect().top));
  return m;
}

function flipAnimate(before) {
  try {
    if (typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  } catch {}
  const cards = [...listEl.querySelectorAll(".card")];
  cards.forEach((el) => {
    const old = before.get(el.dataset.id);
    if (old === undefined) return;
    const dy = old - el.getBoundingClientRect().top;
    if (!dy) return;
    el.style.transform = "translateY(" + dy + "px)";
    el.style.transition = "none";
  });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    cards.forEach((el) => {
      if (!el.style.transform) return;
      el.style.transition = "transform .26s ease";
      el.style.transform = "";
    });
    setTimeout(() => cards.forEach((el) => { el.style.transform = ""; el.style.transition = ""; }), 320);
  }));
}

function endDrag(cancelled) {
  if (!drag) return;
  const wasStarted = drag.started;
  const id = drag.id, target = drag.target, pos = drag.pos;
  cleanupDrag();
  if (!wasStarted) { drag = null; return; } // fue un clic/tap normal
  drag = null;
  suppressClick = true;
  setTimeout(() => { suppressClick = false; }, 80);
  if (cancelled || !target) {
    announce("Arrastre cancelado");
    return;
  }
  const before = snapshotTops();
  moveId(id, target, pos);
  save();
  render();
  flipAnimate(before);
  flashCard(id);
  const item = state.find((d) => d.id === id);
  const vis = orderedItems();
  announce((item ? item.name : id) + " movido a la posición " + (vis.findIndex((d) => d.id === id) + 1) + " de " + vis.length);
}

function cancelPending() {
  if (!drag || drag.started) return;
  clearTimeout(drag.longT);
  drag = null;
}

listEl.addEventListener("pointerdown", (e) => {
  if (drag || !dndOn()) return;
  if (e.pointerType === "mouse" && e.button !== 0) return;
  const card = e.target.closest ? e.target.closest(".card") : null;
  if (!card || interactiveFrom(e.target)) return;
  drag = {
    id: card.dataset.id, pointerId: e.pointerId, type: e.pointerType,
    startX: e.clientX, startY: e.clientY, started: false,
    target: null, pos: null, ghost: null, chip: null, longT: 0,
  };
  if (e.pointerType !== "mouse") {
    // Táctil/pen: long-press sin moverse ni hacer scroll para empezar a arrastrar
    drag.longT = setTimeout(() => {
      if (!drag || drag.started) return;
      startDrag(lastPtrTouchX(), lastPtrTouchY());
    }, 400);
    lastTouch.x = e.clientX;
    lastTouch.y = e.clientY;
  }
});

const lastTouch = { x: 0, y: 0 };
function lastPtrTouchX() { return lastTouch.x; }
function lastPtrTouchY() { return lastTouch.y; }

window.addEventListener("pointermove", (e) => {
  if (!drag || e.pointerId !== drag.pointerId) return;
  const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
  if (!drag.started) {
    if (drag.type === "mouse") {
      if (Math.hypot(dx, dy) < 6) return;
      startDrag(e.clientX, e.clientY);
    } else {
      lastTouch.x = e.clientX;
      lastTouch.y = e.clientY;
      if (Math.hypot(dx, dy) > 10) cancelPending(); // hubo scroll/movimiento: no era un drag
      return;
    }
  }
  moveDrag(e.clientX, e.clientY);
});

window.addEventListener("pointerup", (e) => {
  if (!drag || e.pointerId !== drag.pointerId) return;
  endDrag(false);
});

window.addEventListener("pointercancel", (e) => {
  if (!drag || e.pointerId !== drag.pointerId) return;
  endDrag(true);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drag && drag.started) endDrag(true);
});

// Evita toggles/clics accidentales justo al soltar un arrastre
listEl.addEventListener("click", (e) => {
  if (suppressClick) {
    e.stopPropagation();
    e.preventDefault();
    suppressClick = false;
  }
}, true);

// Teclado: Alt+↑/↓ mueve la card enfocada
listEl.addEventListener("keydown", (e) => {
  if (!e.altKey || (e.key !== "ArrowUp" && e.key !== "ArrowDown") || !dndOn()) return;
  const card = e.target.closest ? e.target.closest(".card") : null;
  if (!card) return;
  e.preventDefault();
  const base = baseOrder();
  const i = base.indexOf(card.dataset.id);
  const j = e.key === "ArrowUp" ? i - 1 : i + 1;
  if (i === -1 || j < 0 || j >= base.length) return;
  const t = base[i]; base[i] = base[j]; base[j] = t;
  customOrder = base;
  save();
  render();
  const h = listEl.querySelector('.card[data-id="' + card.dataset.id + '"] .drag-handle');
  if (h) { try { h.focus({ preventScroll: true }); } catch { try { h.focus(); } catch {} } }
});

let searchT = 0;
function applySearch() {
  query = $("#search").value;
  render();
}
$("#search").addEventListener("input", () => {
  clearTimeout(searchT);
  searchT = setTimeout(applySearch, 120);
});
$("#searchBtn").addEventListener("click", () => { $("#search").focus(); applySearch(); });
$("#clearBtn").addEventListener("click", () => {
  $("#search").value = "";
  query = "";
  render();
  $("#search").focus();
});

// Plantillas
function applyTemplate(name) {
  const tpl = TEMPLATES[name];
  state.forEach((d) => {
    if (tpl[d.id]) { d.value = tpl[d.id].value; d.enabled = tpl[d.id].enabled; }
  });
  save();
  render();
  toast(name === "password" ? "Plantilla PasswordAuthentication aplicada" : "Plantilla PubkeyAuthentication aplicada");
}
$("#tplPassword").addEventListener("click", () => applyTemplate("password"));
$("#tplPubkey").addEventListener("click", () => applyTemplate("pubkey"));

// Copiar / descargar .sh / reset / theme
document.querySelectorAll(".copy-btn").forEach((b) =>
  b.addEventListener("click", async () => {
    const target = document.getElementById(b.dataset.copyTarget || "preview");
    const ok = await copyText(target ? target.textContent : "");
    toast(ok ? "Copiado" : "No se pudo copiar", ok ? undefined : "error");
  })
);
$("#copyAllBtn").addEventListener("click", async () => {
  const ok = await copyText(previewEl.textContent);
  toast(ok ? "Script copiado" : "No se pudo copiar", ok ? undefined : "error");
});

function download() {
  // Descarga contextual: en la pestaña sshd_config baja el .conf, si no el .sh
  const isFinal = typeof activeTab !== "undefined" && activeTab === "final";
  const content = (isFinal && finalEl ? finalEl.textContent : previewEl.textContent) + "\n";
  const name = isFinal ? "sshd_config" : "automatiSSH-server.sh";
  const blob = new Blob([content], { type: isFinal ? "text/plain" : "text/x-shellscript" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
  toast("Descargado " + name);
}
$("#downloadBtn").addEventListener("click", download);
$("#downloadTopBtn").addEventListener("click", download);

$("#resetBtn").addEventListener("click", () => {
  state = cloneDefaults();
  customOrder = null;
  query = "";
  $("#search").value = "";
  try { localStorage.removeItem(STORE_KEY); } catch {}
  render();
  toast("Valores restablecidos");
});

// Theme dark/light (los iconos sol/luna se alternan solo con CSS)
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("automatiSSH-theme", t); } catch {}
}
$("#themeBtn").addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});
try {
  setTheme(localStorage.getItem("automatiSSH-theme") || "dark");
} catch { setTheme("dark"); }

try {
  const repo = $("#repoLink");
  if (repo && REPO_URL) repo.href = REPO_URL;
} catch {}

load();
try {
  const savedTab = localStorage.getItem(TAB_KEY);
  if (savedTab && TABS.includes(savedTab)) selectTab(savedTab, false);
} catch {}
render();
