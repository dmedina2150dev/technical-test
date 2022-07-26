import { Component, OnDestroy, OnInit } from '@angular/core';
import { SnackData } from '@models/snakbar';
import { SnackbarService } from '@services/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit, OnDestroy {
  public data!: SnackData;
	show = false;
	type: string = '';
	message: string = '';
	private snackbarSubscription!: Subscription;

  constructor(private Snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.snackbarSubscription = this.Snackbar.snackbarState.subscribe(
			(state) => {
				if (state.type) {
					this.type = state.type;
				}else{
					this.type = 'success';
				}
				this.message = state.message;
				this.show = state.show;
				setTimeout(() => {
					this.show = false;
				}, 5000);
			}
		);
  }

  closeSnackBar(){
		this.show = false;
	}

	ngOnDestroy(): void {
		this.snackbarSubscription.unsubscribe();
	}

}
