export function initMobileNavDrawer(): void {
	const root = document.getElementById('mobile-nav-drawer-root');
	const openBtn = document.getElementById('mobile-nav-open-btn');
	const closeBtn = document.getElementById('mobile-nav-close-btn');
	const backdrop = document.querySelector('[data-mobile-drawer-backdrop]');
	const drawer = document.getElementById('mobile-nav-drawer');
	const mq = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)') : null;

	let scrollLockGeneration = 0;

	function setOpen(isOpen: boolean): void {
		if (!root || !drawer || !openBtn) return;
		scrollLockGeneration++;

		if (isOpen) {
			const gen = scrollLockGeneration;
			root.classList.add('mobile-nav--open');
			root.setAttribute('aria-hidden', 'false');
			openBtn.setAttribute('aria-expanded', 'true');
			drawer.removeAttribute('inert');
			// TODO(mobile-drawer): Keep scroll-lock on html/body deferred (double rAF) after opening — same-frame overflow lock forces reflow and visible jank on phones.
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					if (gen !== scrollLockGeneration) return;
					if (!root.classList.contains('mobile-nav--open')) return;
					document.documentElement.classList.add('mobile-nav-drawer-open');
					document.body.classList.add('mobile-nav-drawer-open');
				});
			});
			window.setTimeout(() => closeBtn?.focus(), 420);
		} else {
			document.documentElement.classList.remove('mobile-nav-drawer-open');
			document.body.classList.remove('mobile-nav-drawer-open');
			root.classList.remove('mobile-nav--open');
			root.setAttribute('aria-hidden', 'true');
			openBtn.setAttribute('aria-expanded', 'false');
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
