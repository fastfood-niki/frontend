export function initMobileNavDrawer(): void {
	const root = document.getElementById('mobile-nav-drawer-root');
	const openBtn = document.getElementById('mobile-nav-open-btn');
	const closeBtn = document.getElementById('mobile-nav-close-btn');
	const backdrop = document.querySelector('[data-mobile-drawer-backdrop]');
	const drawer = document.getElementById('mobile-nav-drawer');
	const mq = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)') : null;

	function setOpen(isOpen: boolean): void {
		if (!root || !drawer || !openBtn) return;
		root.classList.toggle('mobile-nav--open', isOpen);
		root.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
		openBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		document.documentElement.classList.toggle('mobile-nav-drawer-open', isOpen);
		document.body.classList.toggle('mobile-nav-drawer-open', isOpen);

		if (isOpen) {
			drawer.removeAttribute('inert');
			window.setTimeout(() => closeBtn?.focus(), 10);
		} else {
			drawer.setAttribute('inert', '');
			openBtn.focus();
		}
	}

	function closeDrawer(): void {
		setOpen(false);
	}

	openBtn?.addEventListener('click', (e) => {
		e.stopPropagation();
		const next = !root?.classList.contains('mobile-nav--open');
		setOpen(next);
	});

	closeBtn?.addEventListener('click', () => closeDrawer());

	backdrop?.addEventListener('click', () => closeDrawer());

	document.querySelectorAll('[data-mobile-drawer-link]').forEach((link) => {
		link.addEventListener('click', () => closeDrawer());
	});

	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Escape') return;
		if (!root?.classList.contains('mobile-nav--open')) return;
		e.preventDefault();
		closeDrawer();
	});

	mq?.addEventListener('change', (e) => {
		if (e.matches) closeDrawer();
	});
}
