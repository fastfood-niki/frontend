function clearCategorySelection(): void {
	document.querySelectorAll('.category-tab--active').forEach((el) => el.classList.remove('category-tab--active'));
	document
		.querySelectorAll('.category-section-card--active')
		.forEach((el) => el.classList.remove('category-section-card--active'));
	document.querySelectorAll('[data-category-tab]').forEach((el) => el.removeAttribute('aria-current'));
}

function applyCategorySelection(id: string): void {
	if (!id) {
		clearCategorySelection();
		return;
	}

	const tab = document.querySelector(`[data-category-tab][data-category-id="${CSS.escape(id)}"]`);
	const section = document.getElementById(id);
	const card = section?.querySelector('[data-category-section]');

	if (!tab || !card) {
		clearCategorySelection();
		return;
	}

	clearCategorySelection();
	tab.classList.add('category-tab--active');
	card.classList.add('category-section-card--active');
	tab.setAttribute('aria-current', 'true');
}

function syncCategoryFromHash(): void {
	applyCategorySelection(window.location.hash.replace(/^#/, '').trim());
}

function initCategoryHighlight(): void {
	syncCategoryFromHash();

	document.querySelectorAll('[data-category-tab]').forEach((el) => {
		el.addEventListener('click', (event) => {
			const cid = el.getAttribute('data-category-id');
			if (!cid) return;
			event.preventDefault();
			const section = document.getElementById(cid);
			section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			requestAnimationFrame(() => applyCategorySelection(cid));
		});
	});
}

export function setupCategoryHighlight(): void {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initCategoryHighlight, { once: true });
	} else {
		initCategoryHighlight();
	}
}
